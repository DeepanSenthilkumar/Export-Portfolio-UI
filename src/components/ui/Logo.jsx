import { useId } from 'react';

/** Brand mark — container ship riding a cyan wave. */
export default function Logo({ size = 42 }) {
  const id = useId();
  return (
    <svg className="brand-mark" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#10b2ce" />
          <stop offset="1" stopColor="#083a47" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${id})`} />
      <rect x="15" y="17" width="7" height="7" rx="1" fill="#ffffff" opacity="0.95" />
      <rect x="24" y="17" width="7" height="7" rx="1" fill="#ffffff" opacity="0.75" />
      <rect x="19.5" y="10" width="7" height="6" rx="1" fill="#ffd166" />
      <path d="M10 27h28l-4.5 9h-19z" fill="#ffffff" />
      <path
        d="M8 40c3-2.4 6-2.4 9 0s6 2.4 9 0 6-2.4 9 0 6 2.4 9 0"
        fill="none"
        stroke="#7fe3f4"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}