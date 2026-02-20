import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const statsPath = path.join(process.cwd(), 'data', 'stats.json');

    if (fs.existsSync(statsPath)) {
      const data = fs.readFileSync(statsPath, 'utf-8');
      const stats = JSON.parse(data);
      return NextResponse.json({ stats, success: true });
    }

    const defaultStats = {
      total_trades: 0,
      total_wins: 0,
      total_losses: 0,
      win_rate: 0,
      total_profit: 0,
      current_balance: 1.0,
      last_update: new Date().toISOString(),
      cycle_count: 0
    };

    return NextResponse.json({ stats: defaultStats, success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load stats', success: false },
      { status: 500 }
    );
  }
}
