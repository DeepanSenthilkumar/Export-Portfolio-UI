import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../data/categories';
import Modal from '../ui/Modal';
import CategoryCard from './CategoryCard';

/** "Start Your Order" flow — pick a category, land on its catalog. */
export default function CategorySelectModal({ open, onClose }) {
  const navigate = useNavigate();
  const select = (slug) => {
    onClose();
    navigate(`/products/${slug}`);
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Select Product Category"
      subtitle="Choose a category to browse export-grade products and start your inquiry."
    >
      <div className="modal-cat-grid">
        {CATEGORIES.map((c) => (
          <CategoryCard key={c.slug} category={c} compact onSelect={select} />
        ))}
      </div>
    </Modal>
  );
}