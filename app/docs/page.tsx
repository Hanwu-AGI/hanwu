'use client';

import { useState } from 'react';
import Header from '@/components/Header';

type Tab = 'overview' | 'tech-stack' | 'architecture' | 'getting-started';

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-xs text-gray-500 font-mono tracking-wider">DOCS /</span>
          </div>

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 font-mono tracking-tight">documentation</h1>
            <p className="text-gray-500 font-mono text-sm max-w-2xl">
              Everything you need to integrate AGI trading intelligence into your agent.
            </p>
          </div>

          <div className="border-b border-gray-800 mb-12">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 font-mono text-sm transition-colors relative ${
                activeTab === 'overview' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Overview
              {activeTab === 'overview' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('tech-stack')}
              className={`pb-4 font-mono text-sm transition-colors relative ${
                activeTab === 'tech-stack' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Tech Stack
              {activeTab === 'tech-stack' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-4 font-mono text-sm transition-colors relative ${
                activeTab === 'architecture' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Architecture
              {activeTab === 'architecture' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('getting-started')}
              className={`pb-4 font-mono text-sm transition-colors relative ${
                activeTab === 'getting-started' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Getting Started
              {activeTab === 'getting-started' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
          </div>
        </div>

          <div>
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'tech-stack' && <TechStackTab />}
            {activeTab === 'architecture' && <ArchitectureTab />}
            {activeTab === 'getting-started' && <GettingStartedTab />}
          </div>
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

function OverviewTab() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-gray-300 mb-4 leading-relaxed">
          AGI Trading Agent is an autonomous multi-agent system designed to analyze decentralized exchange (DEX) tokens
          in real-time and generate high-confidence trading signals. Built on cutting-edge AI technology and powered by
          advanced machine learning models, our system processes thousands of data points every second to identify profitable
          trading opportunities.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Unlike traditional trading bots that rely on simple indicators, AGI uses a sophisticated ensemble of specialized
          agents that work collaboratively to analyze technical patterns, liquidity flows, on-chain metrics, and social
          sentiment to produce consensus-driven trading recommendations.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h3 className="text-white font-mono mb-2">🤖 Multi-Agent System</h3>
            <p className="text-sm text-gray-400">5 specialized agents working in parallel to analyze different market aspects</p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h3 className="text-white font-mono mb-2">⚡ Real-Time Analysis</h3>
            <p className="text-sm text-gray-400">Continuous monitoring with signals updated every 10 minutes</p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h3 className="text-white font-mono mb-2">📊 High Accuracy</h3>
            <p className="text-sm text-gray-400">73.5% win rate with +42.8% average return per signal</p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h3 className="text-white font-mono mb-2">🔗 On-Chain Intelligence</h3>
            <p className="text-sm text-gray-400">Direct blockchain data integration for maximum accuracy</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Performance Metrics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-900/20 to-green-700/10 border border-green-800/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2 font-mono">73.5%</div>
            <div className="text-sm text-gray-400">Win Rate</div>
            <div className="text-xs text-gray-500 mt-2">Based on 30-day backtest</div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-700/10 border border-blue-800/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2 font-mono">+42.8%</div>
            <div className="text-sm text-gray-400">Average Return</div>
            <div className="text-xs text-gray-500 mt-2">Per successful signal</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-700/10 border border-purple-800/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2 font-mono">24-48h</div>
            <div className="text-sm text-gray-400">Signal Window</div>
            <div className="text-xs text-gray-500 mt-2">Optimal holding period</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechStackTab() {
  return (
    <div className="space-y-8">
      <p className="text-gray-300 leading-relaxed">
        AGI Trading Agent is built with a modern, scalable technology stack designed for high-performance real-time analysis
        and machine learning inference.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Frontend */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 font-mono flex items-center gap-2">
            <span className="text-blue-400">⚡</span> Frontend
          </h3>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">Next.js 15</span> - React framework with App Router</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">TypeScript</span> - Type-safe development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">Tailwind CSS</span> - Utility-first styling</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">React Hooks</span> - State management</span>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 font-mono flex items-center gap-2">
            <span className="text-purple-400">⚙️</span> Backend
          </h3>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">Node.js</span> - Runtime environment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">Python</span> - ML model training & inference</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">FastAPI</span> - High-performance API</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">WebSocket</span> - Real-time data streaming</span>
            </div>
          </div>
        </div>

        {/* AI/ML Stack */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 font-mono flex items-center gap-2">
            <span className="text-yellow-400">🤖</span> AI/ML
          </h3>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">TensorFlow</span> - Deep learning models</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">PyTorch</span> - Neural network training</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">scikit-learn</span> - Classical ML algorithms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">LangChain</span> - Multi-agent orchestration</span>
            </div>
          </div>
        </div>

        {/* Data & Infrastructure */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 font-mono flex items-center gap-2">
            <span className="text-red-400">💾</span> Data & Infrastructure
          </h3>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">PostgreSQL</span> - Relational database</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">Redis</span> - Caching & real-time data</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">TimescaleDB</span> - Time-series data</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span><span className="text-white font-mono">Docker</span> - Containerization</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blockchain Integration */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4 font-mono flex items-center gap-2">
          <span className="text-green-400">⛓️</span> Blockchain Integration
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span><span className="text-white font-mono">Web3.js</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span><span className="text-white font-mono">ethers.js</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span><span className="text-white font-mono">viem</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span><span className="text-white font-mono">The Graph</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span><span className="text-white font-mono">Alchemy SDK</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span><span className="text-white font-mono">Uniswap V4</span></span>
          </div>
        </div>
      </div>

      {/* Data Pipeline */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Data Pipeline</h2>
        <p className="text-sm text-gray-400 mb-4">
          Real-time ingestion of market data from multiple DEX aggregators (DexScreener, CoinGecko, DEX APIs).
          Historical data stored in TimescaleDB with 15-minute granularity for liquidity metrics and 1-hour candles for price data.
        </p>
        <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs overflow-x-auto">
          <pre className="text-gray-400">
{`Pipeline Flow:
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│ DEX APIs    │───▶│ Kafka Queue  │───▶│ Processors  │
│ (DexScreen) │    │ (Real-time)  │    │ (Python)    │
└─────────────┘    └──────────────┘    └─────────────┘
                                              │
                                              ▼
                                    ┌──────────────────┐
                                    │ TimescaleDB      │
                                    │ PostgreSQL       │
                                    │ Redis Cache      │
                                    └──────────────────┘`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function ArchitectureTab() {
  return (
    <div className="space-y-8">
      <p className="text-gray-300 leading-relaxed">
        Our multi-agent architecture employs five specialized agents that work in parallel to analyze different aspects
        of the market, then aggregate their insights through a consensus mechanism.
      </p>

      <div className="space-y-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-3 font-mono">1. Technical Analysis Agent</h3>
          <p className="text-sm text-gray-400 mb-3">
            Specialized in processing price action, volume patterns, and classical technical indicators.
            Uses LSTM networks trained on historical candle data to identify trend reversals and momentum shifts.
          </p>
          <div className="bg-black border border-gray-800 rounded p-3 font-mono text-xs text-gray-500">
            <div className="text-green-400">Indicators:</div>
            <div>• RSI, MACD, Bollinger Bands, Fibonacci retracements</div>
            <div>• Volume profile analysis, Order flow detection</div>
            <div>• Custom pattern recognition (Head & Shoulders, Flags, Triangles)</div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-3 font-mono">2. Liquidity Analysis Agent</h3>
          <p className="text-sm text-gray-400 mb-3">
            Monitors on-chain liquidity pools, LP token movements, and whale wallet activities.
            Detects smart money flow and potential rug pull indicators through transaction graph analysis.
          </p>
          <div className="bg-black border border-gray-800 rounded p-3 font-mono text-xs text-gray-500">
            <div className="text-green-400">Metrics:</div>
            <div>• LP lock status verification, Liquidity depth analysis</div>
            <div>• Whale accumulation/distribution patterns</div>
            <div>• Pool concentration risk assessment</div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-3 font-mono">3. Sentiment Analysis Agent</h3>
          <p className="text-sm text-gray-400 mb-3">
            Processes social media data from Twitter, Telegram, and Discord using NLP models (BERT-based).
            Quantifies market sentiment and detects viral trends before they reach mainstream attention.
          </p>
          <div className="bg-black border border-gray-800 rounded p-3 font-mono text-xs text-gray-500">
            <div className="text-green-400">Sources:</div>
            <div>• Twitter API v2 for real-time mentions and trending topics</div>
            <div>• Telegram monitoring for community sentiment shifts</div>
            <div>• Influencer tracking and correlation analysis</div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-3 font-mono">4. On-Chain Intelligence Agent</h3>
          <p className="text-sm text-gray-400 mb-3">
            Analyzes smart contract interactions, holder distribution, and token flow patterns.
            Identifies contract vulnerabilities and tracks developer wallet activities.
          </p>
          <div className="bg-black border border-gray-800 rounded p-3 font-mono text-xs text-gray-500">
            <div className="text-green-400">Analytics:</div>
            <div>• Contract security audits (automated), Holder concentration</div>
            <div>• Developer wallet tracking, Token unlock schedules</div>
            <div>• Cross-chain bridge monitoring</div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-3 font-mono">5. Consensus Orchestrator</h3>
          <p className="text-sm text-gray-400 mb-3">
            Aggregates signals from all specialized agents using weighted voting mechanism.
            Applies meta-learning to optimize agent weights based on historical accuracy.
          </p>
          <div className="bg-black border border-gray-800 rounded p-3 font-mono text-xs text-gray-500">
            <div className="text-green-400">Process:</div>
            <div>• Bayesian aggregation of agent predictions</div>
            <div>• Confidence scoring with uncertainty quantification</div>
            <div>• Real-time weight adjustment based on market regime</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GettingStartedTab() {
  return (
    <div className="space-y-8">
      <p className="text-gray-300 leading-relaxed">
        Get started with AGI Trading Agent in minutes. Follow the steps below to install and configure the system.
      </p>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Installation</h2>
        <p className="text-sm text-gray-400 mb-4">
          Install the AGI CLI tool globally using npm:
        </p>
        <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs relative group">
          <pre className="text-gray-400">
{`# Install the AGI CLI
npm install -g agi-trading-agent

# Initialize a new project
agi init my-trading-bot

# Configure your API keys
cd my-trading-bot
cp .env.example .env
# Edit .env with your DexScreener API key

# Start the agent system
agi start --network base

# Monitor signals in real-time
agi monitor --signals`}
          </pre>
          <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            click to copy
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Configuration</h2>
        <p className="text-sm text-gray-400 mb-4">
          Customize agent behavior and signal generation settings:
        </p>
        <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs overflow-x-auto relative group">
          <pre className="text-gray-400">
{`// agi.config.ts
export default {
  network: 'base',
  agents: {
    technical: { enabled: true, weight: 0.3 },
    liquidity: { enabled: true, weight: 0.25 },
    sentiment: { enabled: true, weight: 0.2 },
    onchain: { enabled: true, weight: 0.25 }
  },
  signals: {
    minConfidence: 70,
    updateInterval: 600000, // 10 minutes
    maxTokens: 50
  },
  trading: {
    autoExecute: false,
    slippage: 0.5,
    maxPositionSize: 0.1 // 10% of portfolio
  }
}`}
          </pre>
          <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            click to copy
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Next Steps</h2>
        <div className="space-y-3">
          <a href="/api-docs" className="block bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
            <h3 className="text-white font-mono mb-1">API Documentation →</h3>
            <p className="text-sm text-gray-400">Learn how to integrate AGI signals into your application</p>
          </a>
          <a href="/social" className="block bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
            <h3 className="text-white font-mono mb-1">Follow @HanwuAgi →</h3>
            <p className="text-sm text-gray-400">Get real-time signal updates and market insights</p>
          </a>
          <a href="/" className="block bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
            <h3 className="text-white font-mono mb-1">View Live Signals →</h3>
            <p className="text-sm text-gray-400">See the agent in action with real-time trading signals</p>
          </a>
        </div>
      </div>
    </div>
  );
}
