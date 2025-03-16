import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black/30 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">GameHub</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/tictactoe" className="text-gray-300 hover:text-white px-3 py-2">Tic Tac Toe</Link>
            <Link to="/memory" className="text-gray-300 hover:text-white px-3 py-2">Memory</Link>
            <Link to="/snake" className="text-gray-300 hover:text-white px-3 py-2">Snake</Link>
          </div>
        </div>
      </div>
    </nav>
  );