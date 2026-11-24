import { HERO_STATS } from '../../data/company';

/**
 * Infinite marquee of trade stats; pauses on hover.
 * One track holding two identical halves; each item carries its own
 * trailing margin so translateX(-50%) loops with zero seam.
 */
export default function StatsBand() {
  const half = [...HERO_STATS, ...HERO_STATS, ...HERO_STATS];
  return (
    <div className="stats-band" aria-label="Company statistics">
      <div className="stats-track">
        {[...half, ...half].map((s, i) => (
          <span className="stat-item" key={i} aria-hidden={i >= half.length}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
            <span className="stat-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}