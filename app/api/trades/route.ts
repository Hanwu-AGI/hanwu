import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const tradesPath = path.join(process.cwd(), 'data', 'trades.json');

    if (fs.existsSync(tradesPath)) {
      const data = fs.readFileSync(tradesPath, 'utf-8');
      const trades = JSON.parse(data);
      return NextResponse.json({ trades, success: true });
    }

    return NextResponse.json({ trades: [], success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load trades', success: false },
      { status: 500 }
    );
  }
}
