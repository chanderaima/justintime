import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function TrustedBy(): ReactNode {
  return (
    <section id="trusted" className={styles.section}>
      <div className={styles.container}>
        <Heading as="h2">Trusted by Industry Leaders</Heading>
        <div className={styles.row}>
          <div className={styles.logoCard}><img src={useBaseUrl('/img/blue-dart.svg')} alt="Blue Dart / DHL" /></div>
          <div className={styles.logoCard}><img src={useBaseUrl('/img/om.svg')} alt="OM Logistics" /></div>
        </div>
      </div>
    </section>
  );
}
