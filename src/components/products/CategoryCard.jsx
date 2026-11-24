import { Link } from 'react-router-dom';
import { countProducts } from '../../data/products';
import Badge from '../ui/Badge';
import Icon from '../ui/Icon';

/** Category tile used on the Products hub and inside the order modal. */
export default function CategoryCard({ category, compact = false, onSelect }) {
  const { slug, name, description, image } = category;
  const count = countProducts(slug);

  const media = (
    <div className="category-card-media">
      <img src={image} alt={name} loading="lazy" />
      {!compact && (
        <div className="category-card-badges">
          <Badge tone="solid">Export Grade</Badge>
          <Badge tone="light">Bulk Order</Badge>
        </div>
      )}
    </div>
  );

  if (compact) {
    return (
      <button type="button" className="modal-cat" onClick={() => onSelect(slug)}>
        {media}
        <span>{name}</span>
      </button>
    );
  }

  return (
    <Link to={`/products/${slug}`} className="card category-card">
      {media}
      <div className="category-card-body">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="category-card-foot">
          <span className="category-count">
            <Icon name="Boxes" size={15} /> {count} products
          </span>
          <span className="cat-link">
            Explore <Icon name="ArrowRight" size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}