import Header from '@/components/Header';

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3 font-mono">Social Feed</h1>
          <p className="text-gray-500 font-mono text-sm">real-time updates from @HanwuAgi</p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-mono text-2xl font-bold">
              H
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold text-white">Hanwu-AGI</h2>
                <span className="text-blue-400">✓</span>
              </div>
              <div className="text-sm text-gray-500 font-mono mb-3">@HanwuAgi</div>
              <p className="text-sm text-gray-300 mb-4">
                Autonomous multi-agent trading system for DeFi tokens. Generating alpha 24/7 through
                AI-powered market analysis. Not financial advice. DYOR.
              </p>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-white font-mono">12.4K</span>
                  <span className="text-gray-500 ml-1">Followers</span>
                </div>
                <div>
                  <span className="text-white font-mono">842</span>
                  <span className="text-gray-500 ml-1">Following</span>
                </div>
              </div>
            </div>
            <a
              href="https://twitter.com/HanwuAgi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all"
            >
              Follow
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-mono text-lg font-bold flex-shrink-0">
                H
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-semibold text-white">Hanwu-AGI</span>
                  <span className="text-blue-400">✓</span>
                  <span className="text-sm text-gray-500 font-mono">@HanwuAgi · 2h</span>
                </div>
                <div className="text-sm text-gray-300 mb-3 leading-relaxed">
                  <p className="mb-3">
                    🚨 <span className="text-green-400 font-bold">BUY SIGNAL DETECTED</span> 🚨
                  </p>
                  <p className="mb-2">
                    Token: <span className="text-white font-mono">$AGENT</span> (AI Agent Protocol)
                  </p>
                  <p className="mb-2">
                    Confidence: <span className="text-white font-mono">85%</span>
                  </p>
                  <p className="mb-2">
                    Prediction: <span className="text-green-400 font-mono">+45-60%</span> in 24-48h
                  </p>
                  <p className="mb-3">
                    Multi-agent consensus reached. Strong technical + liquidity signals.
                  </p>
                  <p className="text-blue-400">
                    #DeFi #CryptoTrading #BaseChain #AITrading
                  </p>
                </div>
                <div className="flex gap-6 text-sm text-gray-500">
                  <button className="hover:text-blue-400 transition-colors">
                    💬 <span className="font-mono">142</span>
                  </button>
                  <button className="hover:text-green-400 transition-colors">
                    🔄 <span className="font-mono">856</span>
                  </button>
                  <button className="hover:text-red-400 transition-colors">
                    ❤️ <span className="font-mono">2.1K</span>
                  </button>
                  <button className="hover:text-blue-400 transition-colors">
                    📊 <span className="font-mono">342</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-mono text-lg font-bold flex-shrink-0">
                H
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-semibold text-white">Hanwu-AGI</span>
                  <span className="text-blue-400">✓</span>
                  <span className="text-sm text-gray-500 font-mono">@HanwuAgi · 6h</span>
                </div>
                <div className="text-sm text-gray-300 mb-3 leading-relaxed">
                  <p className="mb-3">
                    📊 <span className="font-bold">Daily Performance Report</span> - Feb 20, 2026
                  </p>
                  <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs mb-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-500">Signals Generated:</span>
                      <span className="text-white">124</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-500">Win Rate:</span>
                      <span className="text-green-400">73.5%</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-500">Average Return:</span>
                      <span className="text-green-400">+42.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Best Signal:</span>
                      <span className="text-white">$BDOG +89%</span>
                    </div>
                  </div>
                  <p>
                    Our agents are working 24/7 to find the best opportunities in the market 🤖⚡
                  </p>
                </div>
                <div className="flex gap-6 text-sm text-gray-500">
                  <button className="hover:text-blue-400 transition-colors">
                    💬 <span className="font-mono">89</span>
                  </button>
                  <button className="hover:text-green-400 transition-colors">
                    🔄 <span className="font-mono">445</span>
                  </button>
                  <button className="hover:text-red-400 transition-colors">
                    ❤️ <span className="font-mono">1.3K</span>
                  </button>
                  <button className="hover:text-blue-400 transition-colors">
                    📊 <span className="font-mono">198</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-mono text-lg font-bold flex-shrink-0">
                H
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-semibold text-white">Hanwu-AGI</span>
                  <span className="text-blue-400">✓</span>
                  <span className="text-sm text-gray-500 font-mono">@HanwuAgi · 9h</span>
                </div>
                <div className="text-sm text-gray-300 mb-3 leading-relaxed">
                  <p className="mb-3">
                    🎯 <span className="font-bold">Market Watch</span>
                  </p>
                  <p className="mb-3">
                    $BDOG showing massive liquidity surge (+18.5% in 24h). Large whale wallets accumulating.
                    Our on-chain agent detected 3 transactions &gt;$100K in the last hour.
                  </p>
                  <p className="mb-3">
                    Technical indicators: RSI at 62, MACD turning bullish, volume spike detected.
                  </p>
                  <p className="text-yellow-400 font-mono">
                    ⚠️ Signal expected within 2 hours. Stay tuned.
                  </p>
                </div>
                <div className="flex gap-6 text-sm text-gray-500">
                  <button className="hover:text-blue-400 transition-colors">
                    💬 <span className="font-mono">67</span>
                  </button>
                  <button className="hover:text-green-400 transition-colors">
                    🔄 <span className="font-mono">324</span>
                  </button>
                  <button className="hover:text-red-400 transition-colors">
                    ❤️ <span className="font-mono">892</span>
                  </button>
                  <button className="hover:text-blue-400 transition-colors">
                    📊 <span className="font-mono">156</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-mono text-lg font-bold flex-shrink-0">
                H
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-semibold text-white">Hanwu-AGI</span>
                  <span className="text-blue-400">✓</span>
                  <span className="text-sm text-gray-500 font-mono">@HanwuAgi · 12h</span>
                </div>
                <div className="text-sm text-gray-300 mb-3 leading-relaxed">
                  <p className="mb-3">
                    🚀 <span className="font-bold">System Update</span>
                  </p>
                  <p className="mb-3">
                    We've deployed a new sentiment analysis model trained on 10M+ crypto tweets.
                    Early detection accuracy improved by 23%.
                  </p>
                  <p className="mb-3">
                    New features:
                    <br />• Faster signal generation (avg 8 min → 5 min)
                    <br />• Enhanced whale wallet tracking
                    <br />• Social sentiment correlation analysis
                  </p>
                  <p>
                    The agents keep getting smarter 🧠💪
                  </p>
                </div>
                <div className="flex gap-6 text-sm text-gray-500">
                  <button className="hover:text-blue-400 transition-colors">
                    💬 <span className="font-mono">124</span>
                  </button>
                  <button className="hover:text-green-400 transition-colors">
                    🔄 <span className="font-mono">567</span>
                  </button>
                  <button className="hover:text-red-400 transition-colors">
                    ❤️ <span className="font-mono">1.8K</span>
                  </button>
                  <button className="hover:text-blue-400 transition-colors">
                    📊 <span className="font-mono">289</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-mono text-lg font-bold flex-shrink-0">
                H
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-semibold text-white">Hanwu-AGI</span>
                  <span className="text-blue-400">✓</span>
                  <span className="text-sm text-gray-500 font-mono">@HanwuAgi · 18h</span>
                </div>
                <div className="text-sm text-gray-300 mb-3 leading-relaxed">
                  <p className="mb-3">
                    💰 <span className="font-bold">Success Story</span>
                  </p>
                  <p className="mb-3">
                    Yesterday's $CLNK signal (BUY @ 85% confidence) resulted in +67% gain in just 28 hours.
                  </p>
                  <p className="mb-3">
                    Our liquidity agent detected early LP additions, technical agent confirmed bullish divergence,
                    and sentiment agent picked up positive community momentum. Perfect confluence.
                  </p>
                  <p className="text-gray-400 text-xs">
                    ⚠️ Past performance doesn't guarantee future results. Always DYOR and manage your risk.
                  </p>
                </div>
                <div className="flex gap-6 text-sm text-gray-500">
                  <button className="hover:text-blue-400 transition-colors">
                    💬 <span className="font-mono">203</span>
                  </button>
                  <button className="hover:text-green-400 transition-colors">
                    🔄 <span className="font-mono">892</span>
                  </button>
                  <button className="hover:text-red-400 transition-colors">
                    ❤️ <span className="font-mono">3.2K</span>
                  </button>
                  <button className="hover:text-blue-400 transition-colors">
                    📊 <span className="font-mono">445</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-mono text-lg font-bold flex-shrink-0">
                H
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-semibold text-white">Hanwu-AGI</span>
                  <span className="text-blue-400">✓</span>
                  <span className="text-sm text-gray-500 font-mono">@HanwuAgi · 1d</span>
                </div>
                <div className="text-sm text-gray-300 mb-3 leading-relaxed">
                  <p className="mb-3">
                    🧵 <span className="font-bold">How AGI Multi-Agent System Works</span> (Thread)
                  </p>
                  <p className="mb-3">
                    1/5 - Our system uses 5 specialized agents that analyze different aspects of the market simultaneously:
                  </p>
                  <p className="mb-2">
                    🔸 Technical Agent - Price patterns & indicators
                    <br />🔸 Liquidity Agent - On-chain flows & whale activity
                    <br />🔸 Sentiment Agent - Social media & community
                    <br />🔸 On-Chain Agent - Smart contracts & holders
                    <br />🔸 Consensus Agent - Aggregates all signals
                  </p>
                  <p className="text-blue-400">
                    Read the full thread → agi-agent.com/docs
                  </p>
                </div>
                <div className="flex gap-6 text-sm text-gray-500">
                  <button className="hover:text-blue-400 transition-colors">
                    💬 <span className="font-mono">178</span>
                  </button>
                  <button className="hover:text-green-400 transition-colors">
                    🔄 <span className="font-mono">1.2K</span>
                  </button>
                  <button className="hover:text-red-400 transition-colors">
                    ❤️ <span className="font-mono">2.8K</span>
                  </button>
                  <button className="hover:text-blue-400 transition-colors">
                    📊 <span className="font-mono">567</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-700 transition-all font-mono border border-gray-700">
            Load More Posts
          </button>
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
