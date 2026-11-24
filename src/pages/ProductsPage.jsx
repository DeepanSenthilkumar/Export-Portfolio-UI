import { useEffect, useState } from 'react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';
import CategoryCard from '../components/products/CategoryCard';
import CategorySelectModal from '../components/products/CategorySelectModal';
import { CATEGORIES } from '../data/categories';
import { TOTAL_PRODUCTS } from '../data/products';

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Shipyon Products — Export-Grade Agricultural & Industrial Goods';
  }, []);

  return (
    <>
      <PageHero
        image="/images/warehouse.png"
        eyebrow="Our Products"
        title="Quality-Sourced. Market-Ready. Globally Competitive."
        subtitle={`Premium agricultural and industrial products sourced directly from trusted producers — ${TOTAL_PRODUCTS} export-grade lines across ${CATEGORIES.length} categories.`}
        breadcrumb={[{ label: 'Products' }]}
        actions={
          <>
            <Button href="#catalog" variant="ghost" iconRight={<Icon name="ChevronDown" size={17} />}>
              Scroll to Explore
            </Button>
            <Button variant="white" onClick={() => setModalOpen(true)} icon={<Icon name="Package" size={17} />}>
              Place Order
            </Button>
          </>
        }
      />

      <section className="section" id="catalog">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Browse by Category"
            title="Product Categories"
            subtitle="We source based on your exact requirement across categories — pick a lane to explore the full catalog."
          />
          <div className="products-grid">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <CategoryCard category={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="order">
        <div className="container">
          <Reveal>
            <div className="cta-band grain">
              <div>
                <h2>Ready to Start Your Order?</h2>
                <p>
                  Select a category, browse export-grade products and send an inquiry —
                  our trade desk handles pricing, samples and logistics from there.
                </p>
              </div>
              <Button variant="white" size="lg" onClick={() => setModalOpen(true)} icon={<Icon name="Package" size={19} />}>
                Start Your Order
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Can't Find Your Product?"
        text="We source custom requirements across India — tell us what you need and we'll verify suppliers for it."
        cta="Request Custom Sourcing"
      />

      <CategorySelectModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}