import json
import random
from datetime import datetime

class TradingSimulator:
    def __init__(self):
        self.balance = 1.0
        self.portfolio = []

    def simulate_market_analysis(self):
        fake_tokens = [
            {"name": "PEPE", "address": "0x6982508145454ce325ddbe47a25d4ec3d2311933"},
            {"name": "WOJAK", "address": "0x5026f006b85729a8b14553fae6af249ad16c9aab"},
            {"name": "SHIB", "address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"},
            {"name": "DOGE2", "address": "0xba8a621b4a54e61c442f5ec623687e2a942225ef"},
            {"name": "FLOKI", "address": "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e"},
        ]

        signals = []
        for token in random.sample(fake_tokens, random.randint(3, 5)):
            confidence = random.uniform(0.65, 0.98)
            signal_type = random.choices(
                ["BUY", "SELL", "HOLD"],
                weights=[0.4, 0.2, 0.4]
            )[0]

            signals.append({
                "token": token["name"],
                "address": token["address"],
                "signal": signal_type,
                "confidence": round(confidence, 2),
                "price": round(random.uniform(0.00001, 0.1), 8),
                "volume_24h": round(random.uniform(100000, 5000000), 2),
                "price_change_24h": round(random.uniform(-15, 25), 2),
                "timestamp": datetime.now().isoformat()
            })

        return sorted(signals, key=lambda x: x['confidence'], reverse=True)

    def simulate_trade(self, signal):
        if signal['signal'] == 'BUY' and self.balance > 0.01:
            amount = round(random.uniform(0.005, 0.015), 4)
            self.balance -= amount

            outcome = random.random()
            if outcome > 0.35:
                profit_loss = amount * random.uniform(0.05, 0.8)
                result = "WIN"
            else:
                profit_loss = -amount * random.uniform(0.1, 0.5)
                result = "LOSS"

            self.balance += amount + profit_loss

            return {
                "action": "BUY",
                "token": signal['token'],
                "address": signal['address'],
                "amount": amount,
                "outcome": result,
                "profit_loss": round(profit_loss, 6),
                "new_balance": round(self.balance, 6),
                "confidence": signal['confidence'],
                "timestamp": datetime.now().isoformat()
            }

        return None
