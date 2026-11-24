import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useBodyLock } from '../../hooks';
import Icon from './Icon';

/** Accessible modal: ESC + backdrop close, body scroll lock, focus on open. */
export default function Modal({ open, onClose, title, subtitle, children }) {
  const closeRef = useRef(null);
  useBodyLock(open);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <h3>{title}</h3>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close dialog">
            <Icon name="X" size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}