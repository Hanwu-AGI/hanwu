import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const signalsPath = path.join(process.cwd(), 'data', 'signals.json');

    if (fs.existsSync(signalsPath)) {
      const data = fs.readFileSync(signalsPath, 'utf-8');
      const signals = JSON.parse(data);
      return NextResponse.json({ signals, success: true });
    }

    return NextResponse.json({ signals: [], success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load signals', success: false },
      { status: 500 }
    );
  }
}
