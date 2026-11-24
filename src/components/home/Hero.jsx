import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { HERO_STATS } from '../../data/company';

/** Home hero — layered image, drifting mesh light, dot pattern, staged entrance. */
export default function Hero() {
  return (
    <section className="hero grain" id="top">
      <div className="hero-media" style={{ backgroundImage: 'url(/images/hero.png)' }} />
      <div className="hero-overlay" />
      <div className="hero-glow" />
      <div className="hero-pattern" />

      <div className="container">
        <div className="hero-content">
          <span className="hero-badge hero-enter" style={{ animationDelay: '0.05s' }}>
            <Icon name="Leaf" size={16} />
            Trusted by 1000+ Partners Worldwide
          </span>

          <h1 className="hero-title hero-enter" style={{ animationDelay: '0.18s' }}>
            South India&apos;s Premier{' '}
            <span className="accent">Trade &amp; Sourcing</span> Company
          </h1>

          <p className="hero-sub hero-enter" style={{ animationDelay: '0.32s' }}>
            Seamless sourcing, trade &amp; market expansion — from South India to the
            world. Export-grade agricultural products, industrial goods and end-to-end
            supply solutions.
          </p>

          <div className="hero-actions hero-enter" style={{ animationDelay: '0.46s' }}>
            <Button to="/products" variant="white" size="lg" iconRight={<Icon name="ArrowRight" size={19} />}>
              Explore Products
            </Button>
            <Button to="/contact" variant="ghost" size="lg" icon={<Icon name="MessageCircle" size={18} />}>
              Contact Us
            </Button>
          </div>

          <div className="hero-meta hero-enter" style={{ animationDelay: '0.6s' }}>
            {HERO_STATS.slice(0, 3).map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#categories" aria-label="Scroll to categories">
        Scroll to Explore
        <Icon name="ChevronDown" size={18} />
      </a>
    </section>
  );
}