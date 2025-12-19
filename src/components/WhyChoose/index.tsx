import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const items = [
  { title: 'Fully Compliant', icon: '/img/icon-compliant.svg', text: 'Complete statutory compliance including GST, ESI, Income Tax and Labour Welfare.' },
  { title: 'Trusted Partners', icon: '/img/icon-partners.svg', text: 'Partnered with major logistics players including Blue Dart / DHL and OM Logistics.' },
  { title: 'Timely Delivery', icon: '/img/icon-timely.svg', text: 'Containerized fleet and experienced drivers ensure punctual, secure transport.' },
];

export default function WhyChoose(): ReactNode {
  return (
    <section id="why" className={styles.sectionAlt}>
      <div className={styles.container}>
        <Heading as="h2">Why Choose Just In Time Services</Heading>
        <div className={styles.grid}>
          {items.map((it) => (
            <div className={styles.card} key={it.title}>
              <div className={styles.iconWrap}>
                <img src={it.icon} alt={it.title} />
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
