import { useEffect } from 'react';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found — Shipyon';
  }, []);

  return (
    <section className="page-hero grain" style={{ minHeight: '78vh', display: 'flex', alignItems: 'center' }}>
      <div className="hero-glow" />
      <div className="container">
        <div className="nf-wrap">
          <div className="nf-code">404</div>
          <h1>This Page Does Not Exist</h1>
          <p>
            The route you&apos;re looking for has drifted off the shipping lane. Head back
            to port or browse the catalog instead.
          </p>
          <div className="nf-actions">
            <Button to="/" variant="white" icon={<Icon name="Anchor" size={18} />}>
              Back to Home
            </Button>
            <Button to="/products" variant="ghost" iconRight={<Icon name="ArrowRight" size={18} />}>
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}