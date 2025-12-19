import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const services = [
  { title: 'Surface Cargo Delivery', text: 'Specialized containerized transport for safe, secure movement of goods across Kochi and nearby regions.' },
  { title: 'Last-Mile Logistics', text: 'Efficient final-leg delivery that ensures timely arrival at customers and distribution points.' },
  { title: 'Regional Distribution', text: 'Optimized routing and regional coverage for distribution across the metro area and surrounding districts.' },
];

export default function CoreServices(): ReactNode {
  return (
    <section id="core-services" className={styles.section}>
      <div className={styles.container}>
        <Heading as="h2">Our Core Services</Heading>
        <div className={styles.grid}>
          {services.map((s, idx) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.cardMedia}>
                <img src={[ '/img/claudio-schwarz-a85IYeAXgxU-unsplash.jpg','/img/mak-8wy9mGgmGoU-unsplash.jpg','/img/grab-Ce9cG07ni1E-unsplash.jpg'][idx]} alt={s.title} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
