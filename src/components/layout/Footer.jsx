import { Link } from 'react-router-dom';
import {
  COMPANY, NAV_LINKS, FOOTER_SERVICES, FOOTER_SOLUTIONS,
} from '../../data/company';
import Logo from '../ui/Logo';
import Icon from '../ui/Icon';

/** Global footer — brand, quick links, services, solutions, socials, legal. */
export default function Footer() {
  return (
    <footer className="site-footer">
      <svg className="footer-wave" viewBox="0 0 1440 54" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0 54V26c120-18 260-26 420-20s340 22 520 18 360-22 500-14v44z"
          fill="#04222b"
        />
        <path
          d="M0 26c120-18 260-26 420-20s340 22 520 18 360-22 500-14"
          fill="none"
          stroke="#10b2ce"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand" aria-label="Shipyon home">
              <Logo size={44} />
              <span className="brand-text">
                Shipyon
                <small>{COMPANY.tagline}</small>
              </span>
            </Link>
            <p>{COMPANY.blurb}</p>
            <div className="footer-address">
              <Icon name="MapPin" size={16} />
              <span>{COMPANY.address}</span>
            </div>
            <div className="footer-phones">
              {COMPANY.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>
                  <Icon name="Phone" size={14} /> {p}
                </a>
              ))}
              <a href={`mailto:${COMPANY.email}`}>
                <Icon name="Mail" size={14} /> {COMPANY.email}
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              {FOOTER_SERVICES.map((s) => (
                <li key={s.label}><Link to={s.to}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Solutions</h3>
            <ul>
              {FOOTER_SOLUTIONS.map((s) => (
                <li key={s.label}><Link to={s.to}>{s.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-experts">
          <p>
            Connecting global markets with seamless supply chains and premium quality
            sourcing. Empowering your trade journey with absolute efficiency.
          </p>
          <Link to="/contact" className="experts-link">
            Connect with Our Experts <Icon name="ArrowRight" size={18} />
          </Link>
        </div>

        <div className="footer-bottom">
          <span>{COMPANY.copyright}</span>
          <div className="footer-social">
            <a className="social-btn" href={COMPANY.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Icon name="MessageCircle" size={18} />
            </a>
            <a className="social-btn" href={COMPANY.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icon name="Instagram" size={18} />
            </a>
            <a className="social-btn" href={`mailto:${COMPANY.email}`} aria-label="Email">
              <Icon name="Mail" size={18} />
            </a>
            <a className="social-btn" href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`} aria-label="Call us">
              <Icon name="Phone" size={18} />
            </a>
          </div>
          <div className="footer-legal">
            <Link to="/terms">Terms of Use</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}