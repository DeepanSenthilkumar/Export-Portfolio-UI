import { EXPERTISE, PILLARS } from '../../data/company';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Icon from '../ui/Icon';

const TILE_TONES = ['', 'icon-tile--amber', 'icon-tile--leaf', 'icon-tile--soft'];

/** "Our Expertise" — four capability pillars on a fresh gradient field. */
export function Expertise() {
  return (
    <section className="section section--tint" id="expertise">
      <div className="container">
        <SectionHeading
          center
          eyebrow="What We Do Best"
          title="Our Expertise"
          subtitle="Four pillars that define how we source, prepare and deliver world-class products across the globe."
        />
        <div className="pillar-grid">
          {EXPERTISE.map((e, i) => (
            <Reveal key={e.title} delay={i * 90}>
              <div className="pillar-card">
                <span className={`icon-tile ${TILE_TONES[i % 4]}`}>
                  <Icon name={e.icon} size={26} />
                </span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** "Pillars of Our Promise" — value commitments on a patterned aqua field. */
export function Pillars() {
  return (
    <section className="section pillars-section grain" id="promise">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Our Values"
          title="The Pillars of Our Promise"
          subtitle="Four commitments that define every product we source and every partnership we build."
        />
        <div className="pillar-grid">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="pillar-card">
                <span className={`icon-tile ${TILE_TONES[(i + 1) % 4]}`}>
                  <Icon name={p.icon} size={26} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}