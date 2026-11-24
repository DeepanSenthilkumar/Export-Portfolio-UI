import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import Reveal from '../components/ui/Reveal';
import Badge from '../components/ui/Badge';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';
import ProductCard from '../components/products/ProductCard';
import NotFoundPage from './NotFoundPage';
import { getCategory } from '../data/categories';
import { PRODUCTS, countProducts } from '../data/products';

/**
 * Category catalog view: live search + subgroup filter chips over the
 * static dataset, grouped product grid, and the Enquire Now conversion flow.
 */
export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategory(slug);
  const [query, setQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState('All');

  useEffect(() => {
    setQuery('');
    setActiveGroup('All');
    if (category) document.title = `${category.name} — Shipyon Products`;
  }, [slug, category]);

  const groups = useMemo(() => PRODUCTS[slug] || [], [slug]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return groups
      .filter((g) => activeGroup === 'All' || g.group === activeGroup)
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (p) =>
            !q ||
            p.name.toLowerCase().includes(q) ||
            p.origin.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, query, activeGroup]);

  const shownCount = filtered.reduce((n, g) => n + g.items.length, 0);

  if (!category) return <NotFoundPage />;

  return (
    <>
      <PageHero
        image={category.image}
        eyebrow={category.label}
        title={category.name}
        subtitle={category.description}
        breadcrumb={[{ label: 'Products', to: '/products' }, { label: category.name }]}
        actions={
          <>
            <Badge tone="solid" icon={<Icon name="BadgeCheck" size={13} />}>Export Grade</Badge>
            <Badge tone="light" icon={<Icon name="Boxes" size={13} />}>{countProducts(slug)} Products</Badge>
            <Badge tone="light" icon={<Icon name="Ship" size={13} />}>Bulk Order</Badge>
          </>
        }
      />

      <section className="section" id="catalog">
        <div className="container">
          <div className="toolbar">
            <div className="search-box">
              <Icon name="Search" size={18} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${category.name.toLowerCase()}…`}
                aria-label={`Search products in ${category.name}`}
              />
            </div>
            <div className="toolbar-chips" role="group" aria-label="Filter by product group">
              {['All', ...groups.map((g) => g.group)].map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`chip ${activeGroup === g ? 'is-active' : ''}`}
                  onClick={() => setActiveGroup(g)}
                  aria-pressed={activeGroup === g}
                >
                  {g}
                </button>
              ))}
            </div>
            <span className="result-count" aria-live="polite">
              {shownCount} of {countProducts(slug)} shown
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <Icon name="Search" size={40} />
              <h3>No products match your search</h3>
              <p>Try a different keyword or clear the filters to see the full catalog.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setQuery('');
                  setActiveGroup('All');
                }}
                icon={<Icon name="X" size={16} />}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            filtered.map((g) => (
              <div className="group-block" key={g.group}>
                <h2 className="group-title">
                  {g.group} <Badge tone="brand">{g.items.length}</Badge>
                </h2>
                <div className="product-grid">
                  {g.items.map((p, i) => (
                    <Reveal key={p.name} delay={Math.min(i, 5) * 60}>
                      <ProductCard product={p} category={category} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))
          )}

          <p style={{ marginTop: 8, fontSize: 14, color: 'var(--muted)' }}>
            Looking for something else?{' '}
            <Link to="/products" style={{ color: 'var(--brand-strong)', fontWeight: 600 }}>
              Browse all categories →
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        title={`Source ${category.name} in Bulk`}
        text="Share your quantity, quality spec and destination — we'll respond with pricing and a shipment plan."
        cta="Enquire About This Category"
      />
    </>
  );
}