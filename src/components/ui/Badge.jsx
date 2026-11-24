/** Small status/label chip. Tones: brand | amber | leaf | light | solid. */
export default function Badge({ tone = 'brand', icon, children, className = '' }) {
  return (
    <span className={`badge badge--${tone} ${className}`}>
      {icon}
      {children}
    </span>
  );
}