import { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Badge from '../components/ui/Badge';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';
import { VALUES, TEAM } from '../data/company';

const GALLERY = [
  { src: '/images/farmers.png', caption: 'Shipyon-partnered farmers sourcing fresh produce across South India' },
  { src: '/images/spices.png', caption: 'Premium agricultural products in the Shipyon export catalog' },
  { src: '/images/warehouse.png', caption: 'Shipyon warehouse and quality-control facility' },
  { src: '/images/fresh-produce.png', caption: 'Quality assurance team reviewing export-grade produce batches' },
];

const STORY_POINTS = [
  { icon: 'Users', title: 'Trusted Supplier Network', text: '500+ verified partners across South India.' },
  { icon: 'Globe2', title: 'Domestic & Global Trade', text: 'Exports to 50+ countries worldwide.' },
  { icon: 'ShieldCheck', title: 'Quality-Driven Operations', text: 'Top-tier control from field to freight.' },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Shipyon — Our Story, Mission & Values';
  }, []);

  return (
    <>
      <PageHero
        image="/images/farmers.png"
        eyebrow="Who We Are"
        title="Connecting Producers to Markets Seamlessly"
        subtitle="Shipyon sources, supplies, and delivers premium agricultural and industrial products across domestic and global markets."
        breadcrumb={[{ label: 'About' }]}
        actions={
          <Button href="#story" variant="ghost" iconRight={<Icon name="ChevronDown" size={17} />}>
            Scroll to Explore
          </Button>
        }
      />

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src} delay={i * 90}>
                <figure className="gallery-item">
                  {i === 0 && <Badge tone="solid" className="gallery-badge">500+ Verified Suppliers</Badge>}
                  <img src={g.src} alt={g.caption} loading="lazy" />
                  <figcaption>{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="story">
        <div className="container">
          <div className="story-grid">
            <Reveal className="story-copy">
              <SectionHeading eyebrow="Our Story" title="About Shipyon" />
              <p>
                Shipyon is a modern sourcing and trade company serving both domestic and
                international markets. We prioritize quality, transparency, and dependable
                supply chains.
              </p>
              <p>
                From farm to table, we maintain strict quality control and work closely with
                local farming communities to promote sustainable agricultural practices.
              </p>
            </Reveal>
            <div className="story-points">
              {STORY_POINTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <div className="story-point">
                    <span className="icon-tile icon-tile--soft"><Icon name={p.icon} size={22} /></span>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="vision">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Purpose & Direction"
            title="Vision & Mission"
            subtitle="Two pillars that guide every decision we make."
          />
          <div className="vm-grid">
            <Reveal>
              <div className="vm-card grain">
                <span className="icon-tile icon-tile--amber"><Icon name="Eye" size={24} /></span>
                <h3>Our Vision</h3>
                <p>
                  To redefine agricultural and product sourcing in South India by building a
                  seamless bridge between local producers and global markets, positioning
                  Indian products as high-value global brands.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="vm-card vm-card--mission grain">
                <span className="icon-tile"><Icon name="Target" size={24} /></span>
                <h3>Our Mission</h3>
                <p>
                  To efficiently source quality products from India, elevate Indian offerings
                  in domestic and global markets, introduce high-potential international
                  products into India, and build a trusted, scalable supply chain that
                  empowers businesses to grow beyond borders.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tint" id="values">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="The principles behind every product we source and every partnership we build."
          />
          <div className="pillar-grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="pillar-card">
                  <span className={`icon-tile ${['', 'icon-tile--amber', 'icon-tile--leaf', 'icon-tile--soft'][i]}`}>
                    <Icon name={v.icon} size={26} />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="container">
          <SectionHeading
            center
            eyebrow="The People Behind It"
            title="Our Leadership Team"
            subtitle="Driving trust, quality and growth."
          />
          <div className="team-grid">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <div className="card team-card">
                  <span className={`avatar ${i === 1 ? 'avatar--amber' : ''}`}>{t.initials}</span>
                  <h3>{t.name}</h3>
                  <span className="team-role">{t.role}</span>
                  <p>{t.bio}</p>
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