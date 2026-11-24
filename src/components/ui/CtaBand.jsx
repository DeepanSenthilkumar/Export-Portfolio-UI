import Button from './Button';
import Icon from './Icon';
import Reveal from './Reveal';

/** Shared conversion band used at the foot of most pages. */
export default function CtaBand({
  title = "Let's Build Your Supply Chain Together",
  text = 'Tell us what you need to source or ship — our trade desk responds within one business day.',
  cta = 'Get in Touch',
}) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="cta-band grain">
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <Button to="/contact" variant="white" size="lg" iconRight={<Icon name="ArrowRight" size={19} />}>
              {cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}