'use client';

import { useState } from 'react';

interface TokenInputProps {
  onAnalyze: (address: string) => void;
  analyzing: boolean;
}

export default function TokenInput({ onAnalyze, analyzing }: TokenInputProps) {
  const [address, setAddress] = useState('0xac9018e87c47a8c85906b4b0e8e6b4c5e27e36f2');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onAnalyze(address);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12">
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 flex items-center gap-3 max-w-2xl mx-auto hover:border-gray-600 transition-colors">
        <span className="text-gray-600 px-2 font-mono text-sm">&gt;</span>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="enter token address"
          className="flex-1 px-2 py-3 font-mono text-sm outline-none bg-transparent text-gray-300 placeholder:text-gray-600"
        />
        <button
          type="submit"
          disabled={analyzing}
          className="px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {analyzing ? 'analyzing...' : 'analyze'}
        </button>
      </div>
    </form>
  );
}
