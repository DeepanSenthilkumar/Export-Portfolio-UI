import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';

/** Shared inner-page hero with image background, breadcrumb and CTA slots. */
export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  actions,
}) {
  return (
    <section className="page-hero grain">
      {image && <div className="page-hero-media" style={{ backgroundImage: `url(${image})` }} />}
      <div className="page-hero-overlay" />
      <div className="hero-glow" />
      <div className="container">
        <div className="page-hero-content">
          {breadcrumb && (
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <Icon name="ChevronDown" size={13} style={{ transform: 'rotate(-90deg)' }} />
              {breadcrumb.map((b, i) => (
                <span key={b.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  {i > 0 && <Icon name="ChevronDown" size={13} style={{ transform: 'rotate(-90deg)' }} />}
                  {b.to ? <Link to={b.to}>{b.label}</Link> : <span aria-current="page">{b.label}</span>}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && <span className="eyebrow eyebrow--light hero-enter">{eyebrow}</span>}
          <h1 className="hero-enter" style={{ animationDelay: '0.12s' }}>{title}</h1>
          {subtitle && <p className="hero-enter" style={{ animationDelay: '0.24s' }}>{subtitle}</p>}
          {actions && <div className="page-hero-actions hero-enter" style={{ animationDelay: '0.36s' }}>{actions}</div>}
        </div>
      </div>
    </section>
  );
}