import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function FleetStrength(): ReactNode {
  return (
    <section id="fleet-strength" className={styles.sectionAlt}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.statCard}>
            <h3>10 Vehicles Ready to Serve</h3>
            <p>Our diverse fleet of commercial vehicles is specifically selected to meet varied cargo requirements.</p>
            <ul>
              <li><strong>Tata 407</strong> - Heavy-duty cargo transport</li>
              <li><strong>Tempo Traveller</strong> - Versatile medium loads</li>
              <li><strong>Tata Ace</strong> - Compact urban delivery</li>
              <li><strong>Tata Intra</strong> - Efficient light cargo</li>
            </ul>
          </div>
          <div className={styles.imageCard}>
            <img src={useBaseUrl('/img/grab-W_UiSLqthaU-unsplash.jpg')} alt="Fleet" />
          </div>
        </div>
      </div>
    </section>
  );
}
