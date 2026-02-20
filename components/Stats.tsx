const stats = [
  { label: 'active agents', value: '7' },
  { label: 'win rate', value: '73.5%' },
  { label: 'signals today', value: '124' },
  { label: 'avg return', value: '+42.8%' },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-black/50 border border-gray-800 rounded p-4">
          <div className="text-xs text-gray-600 mb-1 font-mono">{stat.label}</div>
          <div className="text-2xl font-mono font-semibold text-gray-300">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}
