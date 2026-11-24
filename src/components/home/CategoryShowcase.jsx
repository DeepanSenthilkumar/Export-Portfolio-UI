import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/categories';
import { countProducts } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

/** Home category showcase — five core trade categories with live catalog counts. */
export default function CategoryShowcase() {
  const core = CATEGORIES.filter((c) => c.slug !== 'granite-tiles');
  return (
    <section className="section" id="categories">
      <div className="container">
        <SectionHeading
          center
          eyebrow="What We Trade"
          title="Our Core Trade Categories"
          subtitle="Explore our premium selection of agricultural and industrial products, sourced from the best farms and facilities."
        />
        <div className="cat-grid">
          {core.map((c, i) => (
            <Reveal key={c.slug} delay={i * 90}>
              <Link to={`/products/${c.slug}`} className="cat-card">
                <div className="cat-card-media">
                  <img src={c.image} alt={c.name} loading="lazy" />
                  <span className="cat-count">{countProducts(c.slug)} products</span>
                </div>
                <div className="cat-card-body">
                  <h3>{c.name}</h3>
                  <p>{c.tagline}</p>
                  <span className="cat-link">
                    View Products <Icon name="ArrowRight" size={17} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={core.length * 90}>
            <Link to="/products/granite-tiles" className="cat-card">
              <div className="cat-card-media">
                <img src="/images/granite.png" alt="Granite and Tiles" loading="lazy" />
                <span className="cat-count">{countProducts('granite-tiles')} products</span>
              </div>
              <div className="cat-card-body">
                <h3>Granite &amp; Tiles</h3>
                <p>Premium natural stone and ceramic surfaces for every project scale.</p>
                <span className="cat-link">
                  View Products <Icon name="ArrowRight" size={17} />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
        <div className="cat-showcase-foot">
          <Button to="/products" variant="outline" size="lg" iconRight={<Icon name="ArrowRight" size={18} />}>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}