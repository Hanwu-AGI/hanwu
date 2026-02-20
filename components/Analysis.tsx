export default function Analysis() {
  return (
    <div className="space-y-6">
      {/* Token Header */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-1 text-white">AI Agent Protocol</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-gray-800 px-2 py-1 rounded font-mono text-gray-400">AGENT</span>
              <span className="text-xs text-gray-500 font-mono">0xac90...e36f2</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-white font-mono">85</div>
            <div className="text-xs text-gray-500">confidence</div>
          </div>
        </div>
      </div>

      {/* Signal Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Technical */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-sm font-semibold mb-4 text-white">Technical Analysis</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">RSI (14)</span>
              <span className="font-mono text-white">62</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">MACD</span>
              <span className="font-mono text-white">0.0245</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Volume</span>
              <span className="font-mono text-green-400">Increasing ↗</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Price Action</span>
              <span className="font-mono text-green-400">Bullish 📈</span>
            </div>
          </div>
        </div>

        {/* Liquidity */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-sm font-semibold mb-4 text-white">Liquidity</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Total</span>
              <span className="font-mono text-white">$2.45M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">24h Change</span>
              <span className="font-mono text-green-400">+18.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Whale Activity</span>
              <span className="font-mono text-white">High 🐋</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">LP Status</span>
              <span className="font-mono text-green-400">Locked 🔒</span>
            </div>
          </div>
        </div>

        {/* Sentiment */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-sm font-semibold mb-4 text-white">Social Sentiment</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Twitter Mentions</span>
              <span className="font-mono text-white">1,247</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Sentiment Score</span>
              <span className="font-mono text-white">0.78</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Trending Rank</span>
              <span className="font-mono text-white">#12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Community</span>
              <span className="font-mono text-white">8,420</span>
            </div>
          </div>
        </div>

        {/* On-Chain */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-sm font-semibold mb-4 text-white">On-Chain</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Holders</span>
              <span className="font-mono text-white">3,842</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Top 10 Holdings</span>
              <span className="font-mono text-white">15.8%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Contract</span>
              <span className="font-mono text-green-400">Verified ✓</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Age</span>
              <span className="font-mono text-white">14 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Signals */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6">
        <h3 className="text-sm font-semibold mb-4 text-white">🤖 AI Trading Recommendations</h3>
        <div className="space-y-2.5 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">▸</span>
            <p className="text-gray-300"><span className="font-semibold text-white">SIGNAL:</span> STRONG BUY - Multiple bullish signals converging</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">▸</span>
            <p className="text-gray-300"><span className="font-semibold text-white">PREDICTION:</span> +45-60% potential in next 24-48h</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">▸</span>
            <p className="text-gray-300"><span className="font-semibold text-white">ENTRY:</span> Buy now - liquidity surge indicates smart money accumulation</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">▸</span>
            <p className="text-gray-300"><span className="font-semibold text-white">TARGETS:</span> TP1: +30% | TP2: +60% | STOP LOSS: -8%</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">▸</span>
            <p className="text-gray-300"><span className="font-semibold text-white">TIMING:</span> 24-48h optimal window for profit taking</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">▸</span>
            <p className="text-gray-300"><span className="font-semibold text-white">CONFIDENCE:</span> 85% - Strong trend with volume confirmation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
