var Caro;
class Caro_Element {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.move = 0;
        this.approve = false;
        this.element = document.createElement('button');
        this.element.classList.add('Caro_Button');
        this.clickHandler = () => handleClick(this);
        this.element.addEventListener('click', this.clickHandler);
    }
    End(){
        this.element.removeEventListener('click',this.clickHandler);
    }
}
const n = 10;
const m = 10;
let arr;
function createBoard(n, m) {
    const Container = document.createElement('div');
    arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(m);
        for (let j = 0; j < m; j++) {
            arr[i][j] = new Caro_Element(i, j);

            Container.appendChild(arr[i][j].element);
        }

    }
    Container.classList.add('Caro_Board');
    return Container;
}

function randomNumber() {

    return Math.floor(Math.random() * 10);  // Trả về số ngẫu nhiên trong khoảng [0, max-1]
}

function Spread(Caro_Element) {
    if (Caro_Element.row - 1 >= 0)
        arr[Caro_Element.row - 1][Caro_Element.col].approve = true;
    if (Caro_Element.row + 1 < n)
        arr[Caro_Element.row + 1][Caro_Element.col].approve = true;
    if (Caro_Element.row - 1 >= 0 && Caro_Element.col - 1 >= 0)
        arr[Caro_Element.row - 1][Caro_Element.col - 1].approve = true;
    if (Caro_Element.row + 1 < n && Caro_Element.col + 1 < m)
        arr[Caro_Element.row + 1][Caro_Element.col + 1].approve = true;

    if (Caro_Element.row - 1 >= 0 && Caro_Element.col + 1 < m)
        arr[Caro_Element.row - 1][Caro_Element.col + 1].approve = true;
    if (Caro_Element.row + 1 < n && Caro_Element.col - 1 >= 0)
        arr[Caro_Element.row + 1][Caro_Element.col - 1].approve = true;
    if (Caro_Element.col + 1 < m)
        arr[Caro_Element.row][Caro_Element.col + 1].approve = true;
    if (Caro_Element.col - 1 >= 0)
        arr[Caro_Element.row][Caro_Element.col - 1].approve = true;
}

function v_straight_row(v,x,i,j){
    if(i<0 || j<0 || i>=n || j>=m) return false;
    var check = true;
    if (j + v - 1 < m) {  // Kiểm tra nếu đủ 5 ô theo chiều ngang
        for (let jj = j; jj < j + v; jj++) {
            if (arr[i][jj].move != x) {
                check = false;
                break;
            }
        }
    }
    else return false;
    return check;
}

function v_straight_col(v,x,i,j){
    if(i<0 || j<0 || i>=n || j>=m) return false;
    // Kiểm tra dọc (column)
    var check = true;
    if (i + v - 1 < n) {  // Kiểm tra nếu đủ 5 ô theo chiều dọc
        for (let ii = i; ii < i + v; ii++) {
            if (arr[ii][j].move != x) {
                check = false;
                break;
            }
        }
    }
    else return false;
    return check;
}

function v_cross_topleft_downright(v,x,i,j){
    // Kiểm tra đường chéo từ trên trái xuống dưới phải
    if(i<0 || j<0 || i>=n || j>=m) return false;
    var check= true;
    if (i + v - 1 < n && j + v - 1 < m) {  // Kiểm tra nếu đủ 5 ô theo đường chéo
        for (let k = 0; k < v; k++) {
            if (arr[i + k][j + k].move != x) {
                check = false;
                break;
            }
        }
    }
    else return false;
    return check;
}

function v_cross_topright_downleft(v,x,i,j){
    // Kiểm tra đường chéo từ trên phải xuống dưới trái
    if(i<0 || j<0 || i>=n || j>=m) return false;
    var check = true;
    if (i + v - 1 < n && j - v + 1 >= 0) {  // Kiểm tra nếu đủ 5 ô theo đường chéo
        
        for (let k = 0; k < v; k++) {
            if (arr[i + k][j - k].move != x) {
                check = false;
                break;
            }
        }
    }
    else return false;
    return check;
}

function v_in_a_row(v, x, i, j) {

    
    if(v_cross_topleft_downright(v,x,i,j) || v_cross_topleft_downright(v, x, i - v + 1, j - v + 1)) return true;
    if(v_cross_topright_downleft(v,x,i,j) || v_cross_topright_downleft(v, x, i - v + 1, j + v - 1)) return true;
    if(v_straight_row(v,x,i,j) || v_straight_row(v, x, i, j - v + 1)) return true;
    if(v_straight_col(v,x,i,j) || v_straight_col(v, x, i - v + 1, j)) return true;
    
    return false;

}

class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function Position_Move() {
    var tam = new Position(5, 5);
    var max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j].move == 0 && arr[i][j].approve) {
                
                for (let v = 5; v >= 1; v--) {
                    // check Computer
                    arr[i][j].move = 2;
                    if (v_in_a_row(v, 2, i, j) ) {
                        // console.log("v=",v);
                        if(i==3 && j==4 && v==5) console.log('ok');
                        if (v > max) { 
                            max = v;
                            tam.x = i;
                            tam.y = j
                        }
                    }

                    //check Player
                    arr[i][j].move = 1;
                    // console.log('there',v,arr[i][j].move);
                    if (v_in_a_row(v, 1, i, j)) {
                        if (v > max) {
                            max = v;
                            tam.x = i;
                            tam.y = j
                        }
                    }
                    arr[i][j].move = 0;
                }

            }
        }
    }

    return tam;

}

function Computer_Move() {

    var tam = Position_Move();
    
    arr[tam.x][tam.y].move = 2;
    arr[tam.x][tam.y].element.innerText = 'O';
    Spread(arr[tam.x][tam.y]);
}




function Check_Win(x) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j].move == x) {
                if (v_in_a_row(5, x, i, j)) return true;
            }
        }
    }
    return false;
}

function EndGame(){
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            arr[i][j].End();
        }
    }
}

function Check_Draw(){
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(arr[i][j].move==0) return false;
        }
    }
    return true;
}

function handleClick(Caro_Element) {
    if (Caro_Element.move == 0) {
        Caro_Element.move = 1;
        Caro_Element.element.innerText = 'X';
        if (Check_Win(1)) {
            tam=document.createElement('div');
            tam.innerText="You win!";
            Caro.appendChild(tam);
            EndGame();
            return;
        }
        if(Check_Draw()){
            tam=document.createElement('div');
            tam.innerText="Draw!";
            Caro.appendChild(tam);
            EndGame();
            return;
        }
        Spread(Caro_Element);
        Computer_Move();
        if (Check_Win(2)){
            tam=document.createElement('div');
            tam.innerText="You lose!";
            Caro.appendChild(tam);
            EndGame();
            return;
        } 

    }

}
function Score(arr) {
    if (arr[0][0].move == 1) console.log("1");
    else console.log("0");
}

function Restart(){
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            arr[i][j].element.innerText=' ';
            arr[i][j].move=0;
            arr[i][j].approve=false;
            arr[i][j].element.removeEventListener('click', arr[i][j].clickHandler);
            arr[i][j].element.addEventListener('click', arr[i][j].clickHandler); 
           
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {

    Caro = document.getElementById('Game_Caro');
    var Container = createBoard(n, m);
    // Container.addEventListener('click',()=>Computer_Move());
    Caro.appendChild(Container);
    var RestartGame= document.createElement('button');
    RestartGame.innerText="Play again";
    RestartGame.addEventListener('click',()=> Restart());
    Caro.appendChild(RestartGame);
    // setInterval(() => Score(arr), 1000); // Thực hiện kiểm tra mỗi giây
});
