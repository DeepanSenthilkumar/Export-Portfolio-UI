/** Consistent section header: eyebrow → title → subtitle. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  className = '',
}) {
  const cls = [
    'section-head',
    center ? 'section-head--center' : '',
    light ? 'section-head--light' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      {eyebrow && <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{eyebrow}</span>}
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}