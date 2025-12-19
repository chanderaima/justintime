import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function DeliveringExcellence(): ReactNode {
  return (
    <section id="delivering" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cardRow}>
          <div className={styles.imageCard}>
            <img src="/img/brett-jordan-phUtWl8RyFE-unsplash.jpg" alt="Delivering Excellence" />
          </div>
          <div className={styles.textCard}>
            <Heading as="h2">Delivering Excellence Across Kochi</Heading>
            <p className={styles.lead}>14+ Years of Expertise</p>
            <p>
              Since 2009, Just In Time Services has been a professionally managed
              partnership firm specializing in surface cargo and last-mile logistics. We&apos;ve
              built our reputation on reliability, compliance, and customer satisfaction.
            </p>
            <p>
              Our commitment to operational excellence and regulatory compliance
              sets us apart in the competitive logistics landscape of Kochi and
              surrounding regions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
