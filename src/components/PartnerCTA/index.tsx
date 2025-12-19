import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function PartnerCTA(): ReactNode {
  return (
    <section id="partner-cta" className={styles.sectionAlt}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageBox}><img src="/img/brett-jordan-phUtWl8RyFE-unsplash.jpg" alt="Partner With Us" /></div>
          <div className={styles.textBox}>
            <Heading as="h2">Partner With Us Today</Heading>
            <p>Whether you're an e-commerce business, manufacturer, or distributor, Just In Time Services offers the reliability and professionalism your operations demand.</p>
            <a className="button button--secondary" href="#contact">Request a Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}
