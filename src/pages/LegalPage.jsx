import { useEffect } from 'react';
import PageHero from '../components/ui/PageHero';

const CONTENT = {
  terms: {
    title: 'Terms of Use',
    eyebrow: 'Legal',
    updated: 'Last updated: November 2026 · Prototype document',
    sections: [
      {
        h: '1. Acceptance of Terms',
        p: 'By accessing this website you agree to these terms. This site is a frontend prototype of the Shipyon trade platform; product listings, statistics and company details are presented for demonstration purposes.',
      },
      {
        h: '2. Use of the Site',
        p: 'You may browse the catalog and submit inquiry forms for legitimate trade purposes. You agree not to misuse the site, attempt to disrupt its operation, or scrape content at scale without written permission.',
      },
      {
        h: '3. Product Information',
        p: 'Product descriptions, origins and grades are indicative. Final specifications, pricing, minimum order quantities and availability are confirmed in writing by the Shipyon trade desk before any order is accepted.',
      },
      {
        h: '4. Inquiries & Orders',
        p: 'Submitting an inquiry does not create a binding order. A contract is formed only when Shipyon issues a written proforma invoice and the buyer accepts it. In this prototype, form submissions are simulated locally and are not transmitted.',
      },
      {
        h: '5. Intellectual Property',
        p: 'All brand assets, imagery and copy on this site belong to Shipyon or its licensors and may not be reproduced without permission.',
      },
      {
        h: '6. Limitation of Liability',
        p: 'The site is provided "as is". To the maximum extent permitted by law, Shipyon is not liable for indirect or consequential losses arising from use of the site or reliance on its content.',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    eyebrow: 'Legal',
    updated: 'Last updated: November 2026 · Prototype document',
    sections: [
      {
        h: '1. Data We Collect',
        p: 'When you submit an inquiry we collect the name, email, phone number, company and message you provide. In this frontend prototype the data stays in your browser and is never sent to a server.',
      },
      {
        h: '2. How We Use Data',
        p: 'In production, inquiry data is used solely to respond to your trade request, prepare quotations and arrange shipments. We do not sell personal data or use it for unrelated marketing.',
      },
      {
        h: '3. Cookies & Analytics',
        p: 'This prototype sets no cookies and loads no analytics or advertising scripts. Third-party fonts are served by Google Fonts.',
      },
      {
        h: '4. Data Retention',
        p: 'In production, inquiry records are retained for the duration of the business relationship and as required by applicable trade and tax regulations, then deleted.',
      },
      {
        h: '5. Your Rights',
        p: 'You may request access, correction or deletion of your personal data by contacting the trade desk using the details in the footer of this site.',
      },
      {
        h: '6. Contact',
        p: 'Questions about this policy can be directed to the Shipyon trade desk via the contact page.',
      },
    ],
  },
};

export default function LegalPage({ kind }) {
  const doc = CONTENT[kind] || CONTENT.terms;

  useEffect(() => {
    document.title = `${doc.title} — Shipyon`;
  }, [doc.title]);

  return (
    <>
      <PageHero
        eyebrow={doc.eyebrow}
        title={doc.title}
        subtitle={doc.updated}
        breadcrumb={[{ label: doc.title }]}
      />
      <section className="section">
        <div className="container">
          <div className="legal-body">
            {doc.sections.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}