import { WCU_STATS } from '../../data/company';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

/** Animated container-truck scene + floating capability stats. */
function TruckSvg() {
  return (
    <svg className="truck-svg" viewBox="0 0 520 210" aria-hidden="true">
      <defs>
        <linearGradient id="wcu-container" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#10b2ce" />
          <stop offset="1" stopColor="#0b8fa6" />
        </linearGradient>
        <linearGradient id="wcu-cab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffb020" />
          <stop offset="1" stopColor="#d98a00" />
        </linearGradient>
      </defs>
      <g className="truck-body">
        {/* trailer chassis */}
        <rect x="30" y="150" width="330" height="12" rx="5" fill="#062a35" />
        {/* container */}
        <rect x="42" y="52" width="300" height="98" rx="8" fill="url(#wcu-container)" />
        {[72, 102, 132, 162, 192, 222, 252, 282, 312].map((x) => (
          <rect key={x} x={x} y="58" width="7" height="86" rx="3" fill="#ffffff" opacity="0.14" />
        ))}
        <text x="192" y="112" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="30" fill="#ffffff" letterSpacing="4">
          SHIPYON
        </text>
        <text x="192" y="132" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#e0f5fa" letterSpacing="3">
          GLOBAL TRADE LOGISTICS
        </text>
        {/* cab */}
        <path d="M352 150V84c0-6 4-10 10-10h44c8 0 14 4 18 11l22 38c3 5 4 10 4 16v11z" fill="url(#wcu-cab)" />
        <path d="M366 88h36c5 0 9 3 12 7l16 28h-64z" fill="#04222b" opacity="0.85" />
        <rect x="352" y="132" width="100" height="8" rx="4" fill="#062a35" opacity="0.35" />
        <rect x="446" y="128" width="10" height="14" rx="3" fill="#fff7e0" />
        {/* wheels */}
        {[86, 150, 300, 408].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="166" r="24" fill="#062a35" />
            <g className="truck-wheel">
              <circle cx={cx} cy="166" r="12" fill="#7fe3f4" />
              <rect x={cx - 2} y="156" width="4" height="20" rx="2" fill="#083a47" />
              <rect x={cx - 10} y="164" width="20" height="4" rx="2" fill="#083a47" />
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <SectionHeading
          eyebrow="Why Shipyon"
          title="Why Choose Us"
          subtitle="Your trusted partner for agricultural and industrial trade — with comprehensive, end-to-end solutions."
        />
        <div className="wcu-grid">
          <Reveal>
            <div className="truck-scene grain">
              <TruckSvg />
              <div className="road" aria-hidden="true" />
              <p className="truck-caption">Farm gate → port gate → your gate</p>
            </div>
          </Reveal>
          <div className="wcu-stats">
            {WCU_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="wcu-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}