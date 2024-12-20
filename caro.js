var Caro;
var Computer_Win=0;
var Player_Win=0;
var Score = document.createElement('div');
const n = 15;
const m = 15;
let arr;
var Arr_Winner= new Array(5);
Score.innerText= "Computer " + Computer_Win + " - Player " + Player_Win;
var Container;
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
class Position {
    constructor(x, y) {
        this.next=null
        this.x = x;
        this.y = y;
    }
}



class Stack_Move{
    constructor(){
        this.head=null;
    }
}

var ListMove = new Stack_Move();

function AddHead(x){
    x.next=ListMove.head;
    ListMove.head=x;
}

function RemoveHead() {
    if (ListMove.head) {  // Kiểm tra xem danh sách không rỗng
        let removed = ListMove.head;  // Lưu lại phần tử đầu tiên
        ListMove.head = ListMove.head.next;  // Cập nhật head của danh sách
        removed.next = null;  // Gỡ liên kết của phần tử đã bị xóa
        // Không cần phải dùng delete, JavaScript tự giải phóng bộ nhớ khi không còn tham chiếu tới đối tượng
    }
}

function DeleteList(){
    while(ListMove.head){
        RemoveHead();
    }
}

function createBoard(n, m) {
    Container = document.createElement('div');
    arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(m);
        for (let j = 0; j < m; j++) {
            arr[i][j] = new Caro_Element(i, j);

            Container.appendChild(arr[i][j].element);
        }

    }
    Container.classList.add('Board');
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
    if(check && v==5){
        for (let k = 0; k <  v; k++) {
            Arr_Winner[k]= new Position(i,j+k);   
        }
    }
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
    if(check && v==5){
        for (let k = 0; k <  v; k++) {
            Arr_Winner[k]= new Position(i+k,j);    
        }
    }
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
    if(check && v==5){
        for (let k = 0; k < v; k++) {
            Arr_Winner[k]= new Position(i+k,j+k);
        }
    }
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

    if(check && v==5){
        for (let k = 0; k < v; k++) {
            Arr_Winner[k]= new Position(i+k,j-k);
        }
    }

    return check;
}

function v_in_a_row(v, x, i, j) {

    
    if(v_cross_topleft_downright(v,x,i,j) || v_cross_topleft_downright(v, x, i - v + 1, j - v + 1)) return true;
    if(v_cross_topright_downleft(v,x,i,j) || v_cross_topright_downleft(v, x, i - v + 1, j + v - 1)) return true;
    if(v_straight_row(v,x,i,j) || v_straight_row(v, x, i, j - v + 1)) return true;
    if(v_straight_col(v,x,i,j) || v_straight_col(v, x, i - v + 1, j)) return true;
    
    return false;

}

function Position_Move() {
    var tam = new Position(7, 7);
    var max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j].move == 0 && arr[i][j].approve) {
                
                for (let v = 5; v >= 1; v--) {
                    // check Computer
                    arr[i][j].move = 2;
                    if (v_in_a_row(v, 2, i, j) ) {
                        
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

    if(ListMove.head){
        var t=ListMove.head.next;
        
        if(t){
            console.log(t.x,t.y);
            arr[t.x][t.y].element.classList.remove('Caro_Button_Move');
        } 
    }
    var tam = Position_Move();    
    AddHead(tam);
    arr[tam.x][tam.y].move = 2;
    arr[tam.x][tam.y].element.innerText = 'O';
    
    
    arr[tam.x][tam.y].element.classList.add('Caro_Button_Move');
    Spread(arr[tam.x][tam.y]);
}

function Update_Score(x){
    if(x==1) Player_Win++;
    else Computer_Win++;
    Score.innerText= "Computer " + Computer_Win + " - Player " + Player_Win;
}

function Check_Win(x) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j].move == x) {
                if (v_in_a_row(5, x, i, j)){
                    return true;
                } 
            }
        }
    }
    return false;
}

function Display_winner(){
    for(let i=0;i<5;i++){
        arr[Arr_Winner[i].x][Arr_Winner[i].y].element.classList.add('Caro_Button_Win');
    }
}

function EndGame(){
    Display_winner();
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            arr[i][j].End();
        }
    }
    DeleteList();
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
        var tam= new Position(Caro_Element.row, Caro_Element.col);
        AddHead(tam);
        Caro_Element.element.innerText = 'X';
        if (Check_Win(1)) {    
            EndGame();
            Update_Score(1);
            return;
        }
        if(Check_Draw()){        
            EndGame();
            return;
        }
        Spread(Caro_Element);
        Computer_Move();
        if (Check_Win(2)){
            Update_Score(2);
            EndGame();
            return;
        } 

    }

}


function Restart(){
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            arr[i][j].element.remove();
            arr[i][j]=null;
        }
    }
    arr=null;
    createBoard(n,m);
    Caro.appendChild(Container);
}

function Back_a_move(){
    var tam1=ListMove.head;
    arr[tam1.x][tam1.y].move=0;
    arr[tam1.x][tam1.y].element.innerText='';
    arr[tam1.x][tam1.y].element.classList.remove('Caro_Button_Move');
    RemoveHead();
    var tam2=ListMove.head;
    arr[tam2.x][tam2.y].move=0;
    arr[tam2.x][tam2.y].element.innerText='';
    RemoveHead();
}

function Computer_Go_First(){
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(arr[i][j].move!=0) return;
        }
    }
    Computer_Move();
}

document.addEventListener("DOMContentLoaded", function () {

    Caro = document.getElementById('Game_Caro');
    var Container = createBoard(n, m);

    Caro.appendChild(Container);

    //button play again
    var RestartGame= document.createElement('button');
    RestartGame.innerText="Play again";
    RestartGame.addEventListener('click',()=> Restart());
    // Caro.appendChild(RestartGame);

    //button Undo
    var Undo= document.createElement('button');
    Undo.innerText='Undo';
    Undo.addEventListener('click',()=>Back_a_move());
    // Caro.appendChild(Undo);

    // button máy đánh
    var Computer_Move_First = document.createElement('button');
    Computer_Move_First.innerText="Computer first";
    Computer_Move_First.addEventListener('click',()=>Computer_Go_First());
    // Caro.appendChild(Computer_Move_First);

    var Quer= document.getElementById('Query');
    Quer.appendChild(RestartGame);
    Quer.appendChild(Undo);
    Quer.appendChild(Computer_Move_First);

    Score.classList.add('Score');
    Caro.appendChild(Score);
    

    // setInterval(() => Score(arr), 1000); // Thực hiện kiểm tra mỗi giây
});
