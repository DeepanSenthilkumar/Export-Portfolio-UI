import { JOURNEY } from '../../data/company';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Badge from '../ui/Badge';

/** Four-step farm-to-freight timeline with scroll-reveal and a gradient spine. */
export default function TradeJourney() {
  return (
    <section className="section section--tint journey" id="journey">
      <div className="container">
        <SectionHeading
          center
          eyebrow="How We Deliver"
          title="Our End-to-End Trade Journey"
          subtitle="From farm to freight — a transparent, quality-driven process built for global trade."
        />
        <div className="journey">
          <div className="journey-line" aria-hidden="true" />
          {JOURNEY.map((s, i) => (
            <Reveal key={s.step} className="tl-step" delay={i * 60}>
              <div className="tl-media">
                <span className="tl-num">{s.step}</span>
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>
              <span className="tl-dot" aria-hidden="true" />
              <div className="tl-text">
                <Badge tone="amber" className="tl-tag">{s.tag}</Badge>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}