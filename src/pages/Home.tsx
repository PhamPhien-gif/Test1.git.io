import React from 'react';
import { Link } from 'react-router-dom';
import { Grid3X3, Brain, Cake as Snake } from 'lucide-react';

const games = [
  {
    title: 'Tic Tac Toe',
    description: 'Classic game of X\'s and O\'s',
    icon: Grid3X3,
    path: '/tictactoe',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Memory Game',
    description: 'Test your memory skills',
    icon: Brain,
    path: '/memory',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Snake',
    description: 'Classic snake game',
    icon: Snake,
    path: '/snake',
    color: 'from-purple-500 to-purple-600'
  }
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Welcome to GameHub</h1>
      <p className="text-gray-300 text-center mb-12">Choose from our collection of fun mini-games!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Link
            key={game.title}
            to={game.path}
            className="group block"
          >
            <div className={`bg-gradient-to-br ${game.color} p-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105`}>
              <game.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
              <p className="text-white/80">{game.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );