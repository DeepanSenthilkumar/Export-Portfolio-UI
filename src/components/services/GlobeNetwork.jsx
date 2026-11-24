/**
 * Decorative trade-network globe: meridians, animated freight arcs and
 * pulsing port nodes. Pure SVG + CSS keyframes, no libraries.
 */
export default function GlobeNetwork() {
  const nodes = [
    { x: 300, y: 118, label: 'Rotterdam' },
    { x: 176, y: 150, label: 'New York' },
    { x: 388, y: 196, label: 'Dubai' },
    { x: 330, y: 262, label: 'Singapore' },
    { x: 232, y: 236, label: 'Dharapuram' },
    { x: 420, y: 286, label: 'Sydney' },
  ];
  const arcs = [
    'M232 236 Q 250 120 300 118',
    'M232 236 Q 160 170 176 150',
    'M232 236 Q 320 180 388 196',
    'M232 236 Q 300 280 330 262',
    'M330 262 Q 400 300 420 286',
    'M388 196 Q 360 130 300 118',
  ];
  return (
    <svg className="globe-svg" viewBox="0 0 600 400" role="img" aria-label="Shipyon global trade network map">
      <defs>
        <radialGradient id="gn-sphere" cx="38%" cy="32%" r="75%">
          <stop offset="0" stopColor="#0d6d84" />
          <stop offset="0.65" stopColor="#083a47" />
          <stop offset="1" stopColor="#04222b" />
        </radialGradient>
        <linearGradient id="gn-arc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#10b2ce" />
          <stop offset="1" stopColor="#ffb020" />
        </linearGradient>
      </defs>

      <circle cx="300" cy="200" r="158" fill="url(#gn-sphere)" stroke="#10b2ce" strokeOpacity="0.45" strokeWidth="1.5" />
      {/* meridians + parallels */}
      {[52, 104, 158].map((rx) => (
        <ellipse key={rx} cx="300" cy="200" rx={rx} ry="158" fill="none" stroke="#7fe3f4" strokeOpacity="0.16" />
      ))}
      {[-96, -48, 0, 48, 96].map((dy) => (
        <ellipse key={dy} cx="300" cy={200 + dy} rx={Math.sqrt(Math.max(158 * 158 - dy * dy, 0))} ry="14" fill="none" stroke="#7fe3f4" strokeOpacity="0.14" />
      ))}

      {/* freight arcs */}
      {arcs.map((d, i) => (
        <path
          key={d}
          className="globe-arc"
          d={d}
          fill="none"
          stroke="url(#gn-arc)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.7}s` }}
        />
      ))}

      {/* port nodes */}
      {nodes.map((n, i) => (
        <g key={n.label}>
          <circle className="globe-node" cx={n.x} cy={n.y} r="4.5" fill={i === 4 ? '#ffb020' : '#7fe3f4'} style={{ animationDelay: `${i * 0.4}s` }} />
          <circle cx={n.x} cy={n.y} r="9" fill="none" stroke={i === 4 ? '#ffb020' : '#10b2ce'} strokeOpacity="0.5" />
          <text x={n.x + 13} y={n.y + 4} fontFamily="Inter, sans-serif" fontSize="11" fill="#e0f5fa" opacity="0.85">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}