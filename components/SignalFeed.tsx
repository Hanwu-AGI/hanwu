'use client';

import { useState, useEffect } from 'react';

interface Signal {
  id: string;
  token: string;
  symbol: string;
  address: string;
  signal: 'BUY' | 'HOLD' | 'SELL';
  confidence: number;
  prediction: string;
  price: string;
  change24h: string;
  timestamp: Date;
}

// Mock data generator
const generateSignal = (): Signal => {
  const tokens = [
    { name: 'AI Agent Protocol', symbol: 'AGENT' },
    { name: 'BaseDog', symbol: 'BDOG' },
    { name: 'Degen Coin', symbol: 'DEGEN' },
    { name: 'Clanker Token', symbol: 'CLNK' },
    { name: 'Meme Lord', symbol: 'MLRD' },
    { name: 'Alpha Bot', symbol: 'ABOT' },
  ];

  const token = tokens[Math.floor(Math.random() * tokens.length)];
  const signals: ('BUY' | 'HOLD' | 'SELL')[] = ['BUY', 'BUY', 'BUY', 'HOLD', 'SELL'];
  const signal = signals[Math.floor(Math.random() * signals.length)];

  return {
    id: Math.random().toString(36).substr(2, 9),
    token: token.name,
    symbol: token.symbol,
    address: '0x' + Math.random().toString(16).slice(2, 42),
    signal,
    confidence: Math.floor(Math.random() * 30 + 70),
    prediction: signal === 'BUY' ? `+${(Math.random() * 80 + 20).toFixed(0)}%` :
                signal === 'HOLD' ? '±15%' : `-${(Math.random() * 20 + 5).toFixed(0)}%`,
    price: `$${(Math.random() * 0.01).toFixed(6)}`,
    change24h: `${(Math.random() * 200 - 50).toFixed(1)}%`,
    timestamp: new Date(),
  };
};

export default function SignalFeed() {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [nextUpdate, setNextUpdate] = useState(600); // 10 minutes in seconds

  // Initialize with some signals
  useEffect(() => {
    const initialSignals = Array.from({ length: 5 }, generateSignal);
    setSignals(initialSignals.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()));
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setNextUpdate((prev) => {
        if (prev <= 1) {
          // Add new signal
          const newSignal = generateSignal();
          setSignals((current) => [newSignal, ...current].slice(0, 10)); // Keep last 10
          return 600; // Reset to 10 minutes
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case 'BUY': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'SELL': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    }
  };

  return (
    <div className="space-y-4">
      {/* Header with countdown */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Live Signal Feed</h2>
          <p className="text-xs text-gray-500 font-mono">Auto-updating every 10 minutes</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500 mb-1">Next update in</div>
          <div className="text-2xl font-mono font-bold text-white">{formatTime(nextUpdate)}</div>
        </div>
      </div>

      {/* Signals List */}
      <div className="space-y-3">
        {signals.map((signal, index) => (
          <div
            key={signal.id}
            className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-all"
            style={{ animation: index === 0 ? 'fadeIn 0.5s ease-in' : 'none' }}
          >
            <div className="flex items-start justify-between gap-4">
              {/* Token Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-white">{signal.token}</h3>
                  <span className="text-xs bg-gray-800 px-2 py-0.5 rounded font-mono text-gray-400">
                    {signal.symbol}
                  </span>
                  <span className="text-xs text-gray-600 font-mono">
                    {signal.address.slice(0, 6)}...{signal.address.slice(-4)}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="text-gray-500 text-xs">Price</div>
                    <div className="font-mono text-white">{signal.price}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">24h Change</div>
                    <div className={`font-mono ${parseFloat(signal.change24h) > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {signal.change24h}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Prediction</div>
                    <div className="font-mono text-white">{signal.prediction}</div>
                  </div>
                </div>
              </div>

              {/* Signal Badge */}
              <div className="text-right">
                <div className={`inline-block px-4 py-2 rounded-lg border font-bold text-sm mb-2 ${getSignalColor(signal.signal)}`}>
                  {signal.signal}
                </div>
                <div className="text-xs text-gray-500">
                  {signal.confidence}% confidence
                </div>
                <div className="text-xs text-gray-600 font-mono mt-1">
                  {signal.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
