import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const items = [
  { num: '01', title: 'Firm Registration', text: 'Legally registered partnership firm with all documentation in order' },
  { num: '02', title: 'GST Compliant', text: 'Full GST registration and compliance for transparent operations' },
  { num: '03', title: 'ESI & Income Tax', text: 'Employee State Insurance and Income Tax compliance maintained' },
  { num: '04', title: 'Labour Welfare', text: 'Labour Welfare Board registration and adherence to all labour laws' },
];

export default function ComplianceBlock(): ReactNode {
  return (
    <section id="compliance-block" className={styles.sectionAlt}>
      <div className={styles.container}>
        <div className={styles.complianceGrid}>
          <div>
            <Heading as="h2">Complete Regulatory Compliance</Heading>
            <div className={styles.formLike}>
              {items.map((it) => (
                <div key={it.num} className={styles.row}>
                  <div className={styles.num}>{it.num}</div>
                  <div>
                    <h4>{it.title}</h4>
                    <p>{it.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sideImage}>
            <img src={useBaseUrl('/img/handy-wicaksono-brizG9kR6qI-unsplash.jpg')} alt="Compliance documentation" />
          </div>
        </div>
      </div>
    </section>
  );
}
