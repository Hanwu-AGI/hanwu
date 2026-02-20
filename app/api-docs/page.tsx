'use client';

import { useState } from 'react';
import Header from '@/components/Header';

type Tab = 'endpoints' | 'authentication' | 'websocket' | 'sdks';

export default function APIDocsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('endpoints');

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-xs text-gray-500 font-mono tracking-wider">API /</span>
          </div>

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-4 font-mono tracking-tight">api reference</h1>
            <p className="text-gray-500 font-mono text-sm max-w-2xl">
              Integrate AGI trading signals into your applications with our REST API and WebSocket endpoints.
            </p>
          </div>

          <div className="border-b border-gray-800 mb-12">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('endpoints')}
              className={`pb-4 font-mono text-sm transition-colors relative ${
                activeTab === 'endpoints' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Endpoints
              {activeTab === 'endpoints' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('authentication')}
              className={`pb-4 font-mono text-sm transition-colors relative ${
                activeTab === 'authentication' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Authentication
              {activeTab === 'authentication' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('websocket')}
              className={`pb-4 font-mono text-sm transition-colors relative ${
                activeTab === 'websocket' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              WebSocket
              {activeTab === 'websocket' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('sdks')}
              className={`pb-4 font-mono text-sm transition-colors relative ${
                activeTab === 'sdks' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              SDKs
              {activeTab === 'sdks' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
          </div>
        </div>

          <div>
            {activeTab === 'endpoints' && <EndpointsTab />}
            {activeTab === 'authentication' && <AuthenticationTab />}
            {activeTab === 'websocket' && <WebSocketTab />}
            {activeTab === 'sdks' && <SDKsTab />}
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

function EndpointsTab() {
  return (
    <div className="space-y-8">
      <p className="text-gray-300 leading-relaxed">
        All API requests should be made to <span className="font-mono text-white">https://api.agi-agent.com</span>.
        All responses are returned in JSON format.
      </p>

      <div className="space-y-8">
        {/* GET /signals */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-900/30 border border-green-700/50 rounded text-green-400 font-mono text-xs font-bold">
              GET
            </span>
            <span className="font-mono text-white">/v1/signals</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Retrieve the latest trading signals across all monitored tokens. Signals are updated every 10 minutes.
          </p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2 font-mono">Query Parameters</h4>
            <div className="space-y-2 text-xs">
              <div className="flex gap-2">
                <span className="text-blue-400 font-mono w-32">limit</span>
                <span className="text-gray-500 w-20">integer</span>
                <span className="text-gray-400">Number of signals to return (default: 10, max: 100)</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-400 font-mono w-32">signal</span>
                <span className="text-gray-500 w-20">string</span>
                <span className="text-gray-400">Filter by signal type: BUY, HOLD, SELL</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-400 font-mono w-32">min_confidence</span>
                <span className="text-gray-500 w-20">integer</span>
                <span className="text-gray-400">Minimum confidence score (0-100)</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2 font-mono">Response</h4>
            <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs overflow-x-auto relative group">
              <pre className="text-gray-400">
{`{
  "signals": [
    {
      "id": "sig_abc123",
      "token": "AI Agent Protocol",
      "symbol": "AGENT",
      "address": "0xac9018e87c47a8c85906b4b0e8e6b4c5e27e36f2",
      "network": "base",
      "signal": "BUY",
      "confidence": 85,
      "prediction": "+45%",
      "price_current": "0.000031",
      "change_24h": "+12.5%",
      "timestamp": "2026-02-20T10:30:00Z"
    }
  ],
  "count": 1,
  "total": 124
}`}
              </pre>
              <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                click to copy
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-2 font-mono">Example Request</h4>
            <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs overflow-x-auto relative group">
              <pre className="text-gray-400">
{`curl -X GET "https://api.agi-agent.com/v1/signals?limit=5&signal=BUY" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
              </pre>
              <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                click to copy
              </button>
            </div>
          </div>
        </div>

        {/* POST /analyze */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-900/30 border border-blue-700/50 rounded text-blue-400 font-mono text-xs font-bold">
              POST
            </span>
            <span className="font-mono text-white">/v1/analyze</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Request a detailed analysis of a specific token by contract address. Analysis is performed in real-time.
          </p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2 font-mono">Request Body</h4>
            <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs overflow-x-auto relative group">
              <pre className="text-gray-400">
{`{
  "address": "0xac9018e87c47a8c85906b4b0e8e6b4c5e27e36f2",
  "network": "base",
  "depth": "full"  // Options: "quick" | "standard" | "full"
}`}
              </pre>
              <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                click to copy
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-2 font-mono">Example Request</h4>
            <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs overflow-x-auto relative group">
              <pre className="text-gray-400">
{`curl -X POST https://api.agi-agent.com/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "address": "0xac9018e87c47a8c85906b4b0e8e6b4c5e27e36f2",
    "network": "base",
    "depth": "full"
  }'`}
              </pre>
              <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                click to copy
              </button>
            </div>
          </div>
        </div>

        {/* GET /history */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-900/30 border border-green-700/50 rounded text-green-400 font-mono text-xs font-bold">
              GET
            </span>
            <span className="font-mono text-white">/v1/signals/history</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Retrieve historical signal performance and outcomes. Useful for backtesting and performance analysis.
          </p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2 font-mono">Query Parameters</h4>
            <div className="space-y-2 text-xs">
              <div className="flex gap-2">
                <span className="text-blue-400 font-mono w-24">from</span>
                <span className="text-gray-500 w-24">timestamp</span>
                <span className="text-gray-400">Start date (ISO 8601)</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-400 font-mono w-24">to</span>
                <span className="text-gray-500 w-24">timestamp</span>
                <span className="text-gray-400">End date (ISO 8601)</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-400 font-mono w-24">outcome</span>
                <span className="text-gray-500 w-24">string</span>
                <span className="text-gray-400">Filter by outcome: profit, loss, pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthenticationTab() {
  return (
    <div className="space-y-8">
      <p className="text-gray-300 leading-relaxed">
        All API requests require authentication via Bearer token. Include your API key in the Authorization header
        of each request.
      </p>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Getting Your API Key</h2>
        <p className="text-sm text-gray-400 mb-4">
          Register for an API key by making a POST request to the registration endpoint:
        </p>
        <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs relative group">
          <pre className="text-gray-400">
{`curl -X POST https://api.agi-agent.com/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{"email": "your@email.com"}'`}
          </pre>
          <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            click to copy
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Using Your API Key</h2>
        <p className="text-sm text-gray-400 mb-4">
          Include your API key in the Authorization header:
        </p>
        <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs relative group">
          <pre className="text-gray-400">
{`Authorization: Bearer sk_live_1234567890abcdef`}
          </pre>
          <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            click to copy
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Rate Limits</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-900 border border-gray-700 rounded p-6">
            <div className="text-gray-500 text-sm mb-2">Free Tier</div>
            <div className="text-3xl font-bold text-white font-mono mb-1">100</div>
            <div className="text-xs text-gray-500">requests/hour</div>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded p-6">
            <div className="text-gray-500 text-sm mb-2">Pro Tier</div>
            <div className="text-3xl font-bold text-white font-mono mb-1">1,000</div>
            <div className="text-xs text-gray-500">requests/hour</div>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded p-6">
            <div className="text-gray-500 text-sm mb-2">Enterprise</div>
            <div className="text-3xl font-bold text-white font-mono mb-1">∞</div>
            <div className="text-xs text-gray-500">unlimited</div>
          </div>
        </div>
        <p className="text-xs text-gray-500 font-mono mt-4">
          Rate limit information is included in response headers: X-RateLimit-Limit, X-RateLimit-Remaining
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Error Codes</h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-4 bg-gray-900 border border-gray-700 rounded p-4">
            <span className="font-mono text-red-400 w-12">401</span>
            <div>
              <div className="text-white font-mono mb-1">Unauthorized</div>
              <div className="text-gray-400 text-xs">Invalid or missing API key</div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900 border border-gray-700 rounded p-4">
            <span className="font-mono text-yellow-400 w-12">429</span>
            <div>
              <div className="text-white font-mono mb-1">Rate Limit Exceeded</div>
              <div className="text-gray-400 text-xs">Too many requests, check X-RateLimit-Reset header</div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900 border border-gray-700 rounded p-4">
            <span className="font-mono text-red-400 w-12">500</span>
            <div>
              <div className="text-white font-mono mb-1">Internal Server Error</div>
              <div className="text-gray-400 text-xs">Something went wrong on our end</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebSocketTab() {
  return (
    <div className="space-y-8">
      <p className="text-gray-300 leading-relaxed">
        Connect to our WebSocket endpoint for real-time signal updates. Receives new signals as they're generated
        every 10 minutes.
      </p>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Connection</h2>
        <p className="text-sm text-gray-400 mb-4">
          WebSocket endpoint: <span className="font-mono text-white">wss://api.agi-agent.com/v1/stream</span>
        </p>
        <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs overflow-x-auto relative group">
          <pre className="text-gray-400">
{`const ws = new WebSocket('wss://api.agi-agent.com/v1/stream');

// Authenticate
ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'auth',
    token: 'YOUR_API_KEY'
  }));
};

// Subscribe to signals
ws.send(JSON.stringify({
  type: 'subscribe',
  channels: ['signals', 'analysis']
}));

// Receive updates
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('New signal:', data);
};`}
          </pre>
          <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            click to copy
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Message Format</h2>
        <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs overflow-x-auto relative group">
          <pre className="text-gray-400">
{`{
  "type": "signal",
  "channel": "signals",
  "data": {
    "id": "sig_live123",
    "token": "AI Agent Protocol",
    "signal": "BUY",
    "confidence": 87,
    "timestamp": "2026-02-20T10:45:00Z"
  }
}`}
          </pre>
          <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            click to copy
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Available Channels</h2>
        <div className="space-y-3">
          <div className="bg-gray-900 border border-gray-700 rounded p-4">
            <h3 className="text-white font-mono mb-2">signals</h3>
            <p className="text-sm text-gray-400">Real-time BUY/HOLD/SELL signals as they're generated</p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded p-4">
            <h3 className="text-white font-mono mb-2">analysis</h3>
            <p className="text-sm text-gray-400">Detailed market analysis and agent insights</p>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded p-4">
            <h3 className="text-white font-mono mb-2">performance</h3>
            <p className="text-sm text-gray-400">Signal performance updates and outcome notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SDKsTab() {
  return (
    <div className="space-y-8">
      <p className="text-gray-300 leading-relaxed">
        Official SDKs make it easy to integrate AGI Trading Agent into your applications with type-safe,
        well-documented interfaces.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 font-mono">Node.js / TypeScript</h3>
          <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs mb-4 relative group">
            <pre className="text-gray-400">
{`npm install @agi-agent/sdk`}
            </pre>
            <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
              click to copy
            </button>
          </div>
          <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs mb-4 relative group">
            <pre className="text-gray-400">
{`import { AGIClient } from '@agi-agent/sdk';

const client = new AGIClient({
  apiKey: process.env.AGI_API_KEY
});

const signals = await client.signals.list({
  limit: 10,
  signal: 'BUY'
});`}
            </pre>
            <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
              click to copy
            </button>
          </div>
          <a href="#" className="text-sm text-gray-400 hover:text-white font-mono transition-colors">
            View Documentation →
          </a>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 font-mono">Python</h3>
          <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs mb-4 relative group">
            <pre className="text-gray-400">
{`pip install agi-agent`}
            </pre>
            <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
              click to copy
            </button>
          </div>
          <div className="bg-black border border-gray-800 rounded p-4 font-mono text-xs mb-4 relative group">
            <pre className="text-gray-400">
{`from agi_agent import AGIClient

client = AGIClient(
    api_key=os.getenv('AGI_API_KEY')
)

signals = client.signals.list(
    limit=10,
    signal='BUY'
)`}
            </pre>
            <button className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
              click to copy
            </button>
          </div>
          <a href="#" className="text-sm text-gray-400 hover:text-white font-mono transition-colors">
            View Documentation →
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4 font-mono">Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-green-400">✓</span>
            <div>
              <div className="text-white text-sm mb-1">Type-safe interfaces</div>
              <div className="text-gray-400 text-xs">Full TypeScript support with auto-completion</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400">✓</span>
            <div>
              <div className="text-white text-sm mb-1">Automatic retries</div>
              <div className="text-gray-400 text-xs">Built-in exponential backoff for failed requests</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400">✓</span>
            <div>
              <div className="text-white text-sm mb-1">WebSocket support</div>
              <div className="text-gray-400 text-xs">Easy real-time connection management</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-green-400">✓</span>
            <div>
              <div className="text-white text-sm mb-1">Error handling</div>
              <div className="text-gray-400 text-xs">Comprehensive error types and messages</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
