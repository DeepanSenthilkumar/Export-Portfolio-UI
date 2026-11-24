import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9\s()-]{7,16}$/;

const EMPTY = { name: '', email: '', phone: '', company: '', message: '' };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (!PHONE_RE.test(values.phone.trim())) errors.phone = 'Enter a valid phone number (7–15 digits).';
  if (values.message.trim().length < 10) errors.message = 'Tell us a little more (at least 10 characters).';
  return errors;
}

/**
 * Inquiry form — the site's single conversion point.
 * Frontend prototype: submission is simulated locally (no backend), with
 * full validation, loading and success states. Prefills from "Enquire Now".
 */
export default function ContactForm() {
  const { state } = useLocation();
  const prefill = state?.product ? state : null;

  const initialValues = useMemo(() => {
    if (!prefill) return EMPTY;
    return {
      ...EMPTY,
      message: `Hello Shipyon team, I'm interested in ${prefill.product}${
        prefill.category ? ` (${prefill.category})` : ''
      }. Please share export pricing, minimum order quantity and lead time.`,
    };
  }, [prefill]);

  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [sentSnapshot, setSentSnapshot] = useState(null);
  const [chipVisible, setChipVisible] = useState(Boolean(prefill));

  const setField = (key) => (e) => {
    const next = { ...values, [key]: e.target.value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
  };

  const blurField = (key) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  const clearPrefill = () => {
    setChipVisible(false);
    setValues((v) => ({ ...v, message: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true, company: true, message: true });
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    // Prototype: simulate the mail API round-trip locally.
    window.setTimeout(() => {
      setSentSnapshot({ ...values });
      setStatus('sent');
    }, 1200);
  };

  const reset = () => {
    setValues(EMPTY);
    setTouched({});
    setErrors({});
    setSentSnapshot(null);
    setChipVisible(false);
    setStatus('idle');
  };

  if (status === 'sent' && sentSnapshot) {
    return (
      <div className="card success-card" role="status">
        <div className="success-icon">
          <Icon name="CheckCircle2" size={44} />
        </div>
        <h2>Inquiry Received!</h2>
        <p>
          Thank you, {sentSnapshot.name.split(' ')[0]}. Our trade desk will reach out at{' '}
          <strong>{sentSnapshot.email}</strong> within one business day.
        </p>
        <div className="success-summary">
          <div><strong>Name</strong><span>{sentSnapshot.name}</span></div>
          <div><strong>Email</strong><span>{sentSnapshot.email}</span></div>
          <div><strong>Phone</strong><span>{sentSnapshot.phone}</span></div>
          {sentSnapshot.company && <div><strong>Company</strong><span>{sentSnapshot.company}</span></div>}
          <div><strong>Message</strong><span>{sentSnapshot.message}</span></div>
        </div>
        <Button variant="outline" onClick={reset} icon={<Icon name="Send" size={16} />}>
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  const field = (key, label, props = {}, required = true) => (
    <div className={`field ${key === 'message' || key === 'company' ? 'field--full' : ''}`}>
      <label htmlFor={`cf-${key}`}>
        {label} {required && <span className="req" aria-hidden="true">*</span>}
      </label>
      {key === 'message' ? (
        <textarea
          id={`cf-${key}`}
          className={`textarea ${errors[key] && touched[key] ? 'is-invalid' : ''}`}
          value={values[key]}
          onChange={setField(key)}
          onBlur={blurField(key)}
          aria-invalid={Boolean(errors[key] && touched[key])}
          {...props}
        />
      ) : (
        <input
          id={`cf-${key}`}
          className={`input ${errors[key] && touched[key] ? 'is-invalid' : ''}`}
          value={values[key]}
          onChange={setField(key)}
          onBlur={blurField(key)}
          aria-invalid={Boolean(errors[key] && touched[key])}
          {...props}
        />
      )}
      {errors[key] && touched[key] && (
        <span className="field-error" role="alert">
          <Icon name="AlertCircle" size={13} /> {errors[key]}
        </span>
      )}
    </div>
  );

  return (
    <form className="card contact-form-card" onSubmit={handleSubmit} noValidate>
      <h2>Get in Touch</h2>
      <p>Submit your inquiry or order requirement — we&apos;ll take care of the rest.</p>

      {prefill && chipVisible && (
        <span className="prefill-chip">
          <Icon name="Package" size={15} />
          Inquiry about: {prefill.product}
          <button type="button" onClick={clearPrefill} aria-label="Clear prefilled product">
            <Icon name="X" size={14} />
          </button>
        </span>
      )}

      <div className="form-grid">
        {field('name', 'Name', { type: 'text', placeholder: 'Enter your name', autoComplete: 'name' })}
        {field('email', 'Email', { type: 'email', placeholder: 'Enter your email', autoComplete: 'email' })}
        {field('phone', 'Phone Number', { type: 'tel', placeholder: '+91 98765 43210', autoComplete: 'tel' })}
        {field('company', 'Company / Organization', { type: 'text', placeholder: 'Your company name', autoComplete: 'organization' }, false)}
        {field('message', 'Message', { placeholder: 'Product, quantity, destination port, timeline…', rows: 5 })}
      </div>

      <div style={{ marginTop: 24 }}>
        <Button
          variant="primary"
          size="lg"
          block
          loading={status === 'sending'}
          icon={<Icon name="Send" size={18} />}
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </Button>
      </div>

      <div className="form-note">
        <Icon name="Info" size={15} />
        <span>
          Frontend prototype — submissions are simulated locally and no data leaves your
          browser. In production this form posts to the trade desk mail API.
        </span>
      </div>
    </form>
  );
}