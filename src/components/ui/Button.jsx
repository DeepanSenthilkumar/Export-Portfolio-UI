import { Link } from 'react-router-dom';

/**
 * Polymorphic button: internal Link (`to`), external anchor (`href`),
 * or native button. Variants: primary | white | ghost | outline.
 */
export default function Button({
  variant = 'primary',
  size,
  block = false,
  to,
  href,
  icon,
  iconRight,
  loading = false,
  children,
  className = '',
  ...rest
}) {
  const cls = [
    'btn',
    `btn--${variant}`,
    size ? `btn--${size}` : '',
    block ? 'btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {loading && <span className="spinner" aria-hidden="true" />}
      {!loading && icon}
      {children}
      {!loading && iconRight}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  if (href) {
    const external = !href.startsWith('#');
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...rest}
      >
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} disabled={loading || rest.disabled} {...rest}>
      {inner}
    </button>
  );
}