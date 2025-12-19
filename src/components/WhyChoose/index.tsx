import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const items = [
  {
    title: 'Fully Compliant',
    img: '/img/handy-wicaksono-brizG9kR6qI-unsplash.jpg',
    accent: 'linear-gradient(135deg,#e6f7ef,#f0fff1)',
    text: 'Complete statutory compliance including GST, ESI, Income Tax and Labour Welfare.'
  },
  {
    title: 'Trusted Partners',
    img: '/img/partner-photo.svg',
    accent: 'linear-gradient(135deg,#eef6ff,#f7fbff)',
    text: 'Partnered with major logistics players including Blue Dart / DHL and OM Logistics.'
  },
  {
    title: 'Timely Delivery',
    img: '/img/fleet.svg',
    accent: 'linear-gradient(135deg,#fff7eb,#fffef7)',
    text: 'Containerized fleet and experienced drivers ensure punctual, secure transport.'
  },
];

export default function WhyChoose(): ReactNode {
  return (
    <section id="why" className={styles.sectionAlt}>
      <div className={styles.container}>
        <Heading as="h2">Why Choose Just In Time Services</Heading>
        <div className={styles.grid}>
          {items.map((it) => (
            <div className={styles.card} key={it.title}>
              <div className={styles.iconWrap} style={{ background: it.accent }}>
                <img src={useBaseUrl(it.img)} alt={it.title} />
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
