import { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Badge from '../components/ui/Badge';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';
import GlobeNetwork from '../components/services/GlobeNetwork';
import { SERVICES, PROCESS, STRENGTHS } from '../data/company';

const GLOBE_STATS = [
  { value: '50+', label: 'Export destinations across five continents' },
  { value: '500+', label: 'Verified suppliers in the sourcing network' },
  { value: '99.8%', label: 'On-time delivery across trade corridors' },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Our Services — Shipyon Trade & Sourcing Solutions';
  }, []);

  return (
    <>
      <PageHero
        image="/images/industrial.png"
        eyebrow="What We Do"
        title="End-to-End Sourcing, Trade & Market Expansion"
        subtitle="Connecting South Indian producers with global markets through trusted, end-to-end trade solutions."
        breadcrumb={[{ label: 'Services' }]}
        actions={
          <>
            <Button href="#services" variant="ghost" iconRight={<Icon name="ChevronDown" size={17} />}>
              Scroll to Explore
            </Button>
            <Button to="/contact" variant="white" icon={<Icon name="MessageCircle" size={17} />}>
              Reach Us
            </Button>
          </>
        }
      />

      <section className="section" id="services">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What We Offer"
            title="Our Core Services"
            subtitle="Everything you need to source, trade, and expand — under one roof."
          />
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card service-card">
                  <span className={`icon-tile ${['', 'icon-tile--amber', 'icon-tile--leaf', 'icon-tile--soft', ''][i % 5]}`}>
                    <Icon name={s.icon} size={24} />
                  </span>
                  <Badge tone="brand">{s.tag}</Badge>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={SERVICES.length * 80}>
              <div className="card service-card" style={{ background: 'var(--grad-hero)', borderColor: 'transparent' }}>
                <span className="icon-tile icon-tile--amber"><Icon name="Sparkles" size={24} /></span>
                <h3 style={{ color: '#fff' }}>Need something custom?</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Tell us your product and destination — we&apos;ll build the sourcing program around it.
                </p>
                <Button to="/contact" variant="white" size="sm" iconRight={<Icon name="ArrowRight" size={15} />}>
                  Request a Quote
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tint" id="process">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Process"
            title="How We Work"
            subtitle="A streamlined four-step flow — from requirement to delivery."
          />
          <div className="process-grid">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="process-step">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark grain" id="network">
        <div className="container">
          <SectionHeading
            light
            eyebrow="Worldwide Presence"
            title="Our Global Network"
            subtitle="Connecting businesses across continents with trusted suppliers and reliable logistics."
          />
          <div className="globe-wrap">
            <Reveal>
              <GlobeNetwork />
            </Reveal>
            <div className="globe-stats">
              {GLOBE_STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 110}>
                  <div className="globe-stat">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="strengths">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Strengths"
            title="Why Shipyon?"
            subtitle="Four pillars that set us apart from the rest."
          />
          <div className="strengths-grid">
            {STRENGTHS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="pillar-card" style={{ background: '#fff', border: '1px solid var(--line)' }}>
                  <span className={`icon-tile ${['', 'icon-tile--amber', 'icon-tile--leaf', 'icon-tile--soft'][i]}`}>
                    <Icon name={s.icon} size={26} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}