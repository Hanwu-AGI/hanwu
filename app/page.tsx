'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Stats from '@/components/Stats';
import SignalFeed from '@/components/SignalFeed';
import TokenInput from '@/components/TokenInput';
import Analysis from '@/components/Analysis';

export default function Home() {
  const [analyzing, setAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleAnalyze = (address: string) => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowAnalysis(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 font-mono">Hanwu-AGI</h1>
          <p className="text-gray-500 font-mono text-sm">autonomous signal generation and market analysis</p>
        </div>

        <Stats />

        <div className="mb-12">
          <SignalFeed />
        </div>

        <div className="border-t border-gray-800 pt-12 mt-12">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Manual Token Analysis</h2>
          <TokenInput onAnalyze={handleAnalyze} analyzing={analyzing} />
          {showAnalysis && <Analysis />}
        </div>
      </main>

      <footer className="border-t border-gray-800 py-6 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-600 font-mono">
          Hanwu-AGI © 2026 — powered by multi-agent intelligence
        </div>
      </footer>
    </div>
  );
}
