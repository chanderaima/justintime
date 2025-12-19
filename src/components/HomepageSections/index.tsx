import type {ReactNode} from 'react';
import DeliveringExcellence from '@site/src/components/DeliveringExcellence';
import WhyChoose from '@site/src/components/WhyChoose';
import CoreServices from '@site/src/components/CoreServices';
import FleetStrength from '@site/src/components/FleetStrength';
import TrustedBy from '@site/src/components/TrustedBy';
import ComplianceBlock from '@site/src/components/ComplianceBlock';
import ServiceCommitment from '@site/src/components/ServiceCommitment';
import PartnerCTA from '@site/src/components/PartnerCTA';
import ContactForm from '@site/src/components/ContactForm';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageSections(): React.ReactNode {
  return (
    <main>
      <DeliveringExcellence />
      <WhyChoose />
      <CoreServices />
      <FleetStrength />
      <TrustedBy />
      <ComplianceBlock />
      <ServiceCommitment />
      <section id="coverage" className={styles.sectionAlt}>
        <div className={styles.container}>
          <Heading as="h2">Service Coverage</Heading>
          <p>We serve Kochi metro, industrial zones, port areas and surrounding districts.</p>
          <ul>
            <li>Kochi city center and suburbs</li>
            <li>Industrial zones and business parks</li>
            <li>Port areas and logistics hubs</li>
            <li>Surrounding districts and towns</li>
          </ul>
        </div>
      </section>
      <PartnerCTA />
      <section id="contact" className={styles.sectionContact}>
        <div className={styles.container}>
          <Heading as="h2">Contact & Quote</Heading>
          <p>
            <strong>Phone:</strong> +91-91XXXXXXXX<br />
            <strong>Email:</strong> info@justintimeservices.example
          </p>
          <div style={{marginTop: '1rem'}}>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
