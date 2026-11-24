import { useNavigate } from 'react-router-dom';
import Icon from '../ui/Icon';
import Button from '../ui/Button';

/** Per-category gradient fields for the product visual tile. */
const ACCENT_GRADIENTS = {
  leaf: 'linear-gradient(140deg, #2fbf71 0%, #0d8a5f 55%, #083a47 100%)',
  coral: 'linear-gradient(140deg, #ff6b5e 0%, #d94336 55%, #6e1d16 100%)',
  amber: 'linear-gradient(140deg, #ffb020 0%, #e07b00 55%, #7a4100 100%)',
  brand: 'linear-gradient(140deg, #10b2ce 0%, #0b8fa6 55%, #083a47 100%)',
  ocean: 'linear-gradient(140deg, #0d6d84 0%, #0d4d5e 55%, #04222b 100%)',
};

/**
 * Catalog product card. The only action is "Enquire Now", which routes to
 * the contact form with the product + category prefilled (real working flow).
 */
export default function ProductCard({ product, category }) {
  const navigate = useNavigate();
  const gradient = ACCENT_GRADIENTS[category.accent] || ACCENT_GRADIENTS.brand;

  const enquire = () =>
    navigate('/contact', {
      state: { product: product.name, category: category.name, categorySlug: category.slug },
    });

  return (
    <article className="card product-card">
      <div className="product-visual" style={{ background: gradient }}>
        <Icon name={product.icon} size={52} strokeWidth={1.6} />
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p className="desc">{product.desc}</p>
        <span className="product-origin">
          <Icon name="MapPin" size={14} /> {product.origin}
        </span>
        <Button variant="outline" size="sm" onClick={enquire} iconRight={<Icon name="ArrowUpRight" size={15} />}>
          Enquire Now
        </Button>
      </div>
    </article>
  );
}