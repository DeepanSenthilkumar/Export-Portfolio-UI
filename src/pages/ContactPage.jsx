import { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Shipyon — Trade Inquiries & Partnership Requests';
  }, []);

  return (
    <>
      <PageHero
        image="/images/hero.png"
        eyebrow="Contact Us"
        title="Get in Touch with Shipyon"
        subtitle="For inquiries, orders, or partnership opportunities — we're here to help."
        breadcrumb={[{ label: 'Contact' }]}
        actions={
          <Button href="#inquiry" variant="ghost" iconRight={<Icon name="ChevronDown" size={17} />}>
            Reach Us
          </Button>
        }
      />

      <section className="section" id="inquiry">
        <div className="container">
          <div className="contact-layout">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}