import { COMPANY } from '../../data/company';
import Icon from '../ui/Icon';

/** Contact sidebar — verified company facts (no placeholder template text). */
export default function ContactInfo() {
  return (
    <div className="info-stack">
      <div className="card info-card">
        <span className="icon-tile icon-tile--soft"><Icon name="Globe2" size={24} /></span>
        <div>
          <h3>About Shipyon</h3>
          <p>Global Sourcing Network</p>
          <p className="sub">Supply Chain Solutions · Domestic &amp; Export Trade</p>
        </div>
      </div>

      <div className="card info-card">
        <span className="icon-tile"><Icon name="Phone" size={22} /></span>
        <div>
          <h3>Phone</h3>
          {COMPANY.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
          ))}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </div>
      </div>

      <div className="card info-card">
        <span className="icon-tile icon-tile--amber"><Icon name="MapPin" size={22} /></span>
        <div>
          <h3>Our Office</h3>
          <p>{COMPANY.address}</p>
          <p className="sub">Tamil Nadu, India</p>
        </div>
      </div>

      <div className="card info-card">
        <span className="icon-tile icon-tile--leaf"><Icon name="MessageCircle" size={22} /></span>
        <div>
          <h3>Quick Connect</h3>
          <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp →</a>
          <a href={COMPANY.instagram} target="_blank" rel="noreferrer">Follow on Instagram →</a>
          <p className="sub">Trade desk hours: Mon–Sat, 9:00–19:00 IST</p>
        </div>
      </div>
    </div>
  );
}