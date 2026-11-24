import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../data/company';
import { useScrolled, useBodyLock } from '../../hooks';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

/** Fixed header: transparent over heroes, frosted white after scroll. */
export default function Header() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useBodyLock(open);

  // Close the mobile panel whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const pillClass = ({ isActive }) => `nav-pill ${isActive ? 'is-active' : ''}`;

  return (
    <>
      <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Shipyon home">
            <Logo />
            <span className="brand-text">
              Shipyon
              <small>TRADE &amp; EXPORT</small>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={pillClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <Button to="/contact" size="sm" className="header-cta" iconRight={<Icon name="ArrowUpRight" size={16} />}>
              Get a Quote
            </Button>
            <button
              className="mobile-toggle"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={pillClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Button to="/contact" iconRight={<Icon name="ArrowUpRight" size={17} />}>
          Get a Quote
        </Button>
      </div>
    </>
  );
}