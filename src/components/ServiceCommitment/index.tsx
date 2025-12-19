import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const items = [
  { key: '14+', title: 'Years of Service', text: 'Safety First - Containerized SUV transport methods protect your cargo.' },
  { key: '10', title: 'Vehicle Fleet', text: 'On-Time Performance - Punctuality is our promise.' },
  { key: '2', title: 'Major Partners', text: 'Regional Expertise - Deep knowledge of Kochi and surrounding areas.' },
];

export default function ServiceCommitment(): ReactNode {
  return (
    <section id="commitment" className={styles.section} style={{backgroundImage: 'url(/img/truck-bg.svg)'}}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <Heading as="h2">Our Service Commitment</Heading>
          <img className={styles.truckImg} src="/img/wynand-van-poortvliet-kWUZKKBR2Ag-unsplash.jpg" alt="Truck on road" />
          <div className={styles.grid}>
            {items.map((it) => (
              <div className={styles.card} key={it.key}>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
                <div className={styles.stat}>{it.key}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
