import json
import os
import sys
import random
from datetime import datetime

sys.path.insert(0, os.path.dirname(__file__))
from simulator import TradingSimulator

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

THINKING_PHRASES = [
    "scanning for alpha...",
    "building toward something...",
    "patterns emerging...",
    "processing market data...",
    "monitoring liquidity pools...",
    "analyzing whale movements...",
    "calibrating signal weights...",
    "hunting for inefficiencies...",
    "observing the mempool...",
    "cross-referencing on-chain data...",
]

def load_json(filepath, default):
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            return json.load(f)
    return default

def save_json(filepath, data):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w') as f:
        json.dump(data, f, indent=2)

def run_cycle():
    print("🚀 Hanwu-AGI Autonomous Cycle Started")
    print(f"⏰ Timestamp: {datetime.now().isoformat()}")

    sim = TradingSimulator()

    signals = sim.simulate_market_analysis()
    print(f"📊 Generated {len(signals)} market signals")

    trades = []
    for signal in signals:
        if signal['confidence'] > 0.85 and signal['signal'] == 'BUY':
            trade = sim.simulate_trade(signal)
            if trade:
                trades.append(trade)
                print(f"💰 {trade['action']}: {trade['token']} @ {trade['amount']} ETH → {trade['outcome']} ({trade['profit_loss']:+.6f} ETH)")

    save_json(os.path.join(ROOT, 'data/signals.json'), signals)

    all_trades = load_json(os.path.join(ROOT, 'data/trades.json'), [])
    all_trades.extend(trades)
    save_json(os.path.join(ROOT, 'data/trades.json'), all_trades)

    prev_state = load_json(os.path.join(ROOT, 'docs/state.json'), {"cycle": 0})
    cycle_number = prev_state.get('cycle', 0) + 1

    if all_trades:
        total_profit = sum(t['profit_loss'] for t in all_trades)
        wins = len([t for t in all_trades if t['outcome'] == 'WIN'])
        win_rate = wins / len(all_trades)

        stats = {
            "total_trades": len(all_trades),
            "total_wins": wins,
            "total_losses": len(all_trades) - wins,
            "win_rate": round(win_rate * 100, 1),
            "total_profit": round(total_profit, 6),
            "current_balance": round(1.0 + total_profit, 6),
            "last_update": datetime.now().isoformat(),
            "cycle_count": cycle_number
        }
    else:
        stats = {
            "total_trades": 0,
            "total_wins": 0,
            "total_losses": 0,
            "win_rate": 0,
            "total_profit": 0,
            "current_balance": 1.0,
            "last_update": datetime.now().isoformat(),
            "cycle_count": cycle_number
        }

    save_json(os.path.join(ROOT, 'data/stats.json'), stats)

    top_signal = signals[0] if signals else None
    thinking = random.choice(THINKING_PHRASES)
    if top_signal and top_signal['signal'] == 'BUY':
        thinking = f"watching {top_signal['token']} closely... {top_signal['confidence']*100:.0f}% confidence"

    state = {
        "cycle": cycle_number,
        "last_update": datetime.now().isoformat(),
        "win_rate": stats['win_rate'],
        "total_trades": stats['total_trades'],
        "thinking": thinking
    }

    save_json(os.path.join(ROOT, 'docs/state.json'), state)

    print(f"\n📈 Performance Summary:")
    print(f"   Cycle: #{cycle_number}")
    print(f"   Total Trades: {stats['total_trades']}")
    print(f"   Win Rate: {stats['win_rate']}%")
    print(f"   Total P/L: {stats['total_profit']:+.6f} ETH")
    print(f"   Balance: {stats['current_balance']:.6f} ETH")
    print(f"   Thinking: {thinking}")
    print(f"\n✅ Cycle completed successfully\n")

if __name__ == "__main__":
    run_cycle()
