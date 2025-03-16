import React, { useState, useEffect } from 'react';

const CARD_PAIRS = ['🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎪', '🎯'];

export default function MemoryGame() {
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const shuffledCards = [...CARD_PAIRS, ...CARD_PAIRS]
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  const handleClick = (index: number) => {
    if (disabled || flipped.includes(index) || solved.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      
      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setSolved([...solved, ...newFlipped]);
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    const shuffledCards = [...CARD_PAIRS, ...CARD_PAIRS]
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-8">Memory Game</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {cards.map((card, index) => (
          <button
            key={index}
            className={`w-20 h-20 text-3xl rounded-lg transition-all duration-300 ${
              flipped.includes(index) || solved.includes(index)
                ? 'bg-purple-500 rotate-0'
                : 'bg-white/10 rotate-180'
            }`}
            onClick={() => handleClick(index)}
            disabled={disabled}
          >
            {(flipped.includes(index) || solved.includes(index)) && card}
          </button>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded"
      >
        Reset Game
      </button>
    </div>
  );