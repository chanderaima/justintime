import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function WhyPartnerWithUs(): ReactNode {
  return (
    <section id="why-partner" className={styles.sectionAlt}>
      <div className={styles.container}>
        <div className={styles.whyGrid}>
          <div>
            <Heading as="h2">Why Partner With Us?</Heading>
            <p className={styles.lead}>100% Compliance. Zero Risk. Absolute Reliability.</p>
            <p>
              In the logistics industry, operational efficiency is only half the battle. The other half is legal and statutory integrity. Just In Time Services stands out as a professionally managed partnership firm that takes compliance as seriously as delivery.
            </p>
            <div className={styles.formLike}>
              <div className={styles.row}>
                <div className={styles.num}><span>01</span></div>
                <div>
                  <h4>Risk Mitigation for Our Partners</h4>
                  <p>
                    When you outsource your Kochi operations to us, you eliminate the risk of legal bottlenecks. We maintain up-to-date records for GST, Income Tax, and Firm Registration, ensuring that your supply chain remains transparent and audit-ready.
                  </p>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.num}><span>02</span></div>
                <div>
                  <h4>Ethical Labor Standards</h4>
                  <p>We believe that a happy workforce leads to timely deliveries. Unlike unorganized players, we are fully compliant with:</p>
                  <ul>
                    <li><strong>ESI (Employee State Insurance):</strong> Ensuring our drivers and staff are protected.</li>
                    <li><strong>Labour Welfare Board:</strong> Adhering to all state-mandated welfare schemes.</li>
                    <li><strong>Statutory Labour Laws:</strong> Ensuring fair practices that prevent operational strikes or disruptions.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.num}><span>03</span></div>
                <div>
                  <h4>Safety Through Containerization</h4>
                  <p>We don't just move goods; we protect them. By utilizing a fleet of containerized SUVs and commercial vehicles, we shield your cargo from:</p>
                  <ul>
                    <li>Kerala’s heavy monsoon rains.</li>
                    <li>Transit theft and pilferage.</li>
                    <li>Accidental damage during surface movement.</li>
                  </ul>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.num}><span>04</span></div>
                <div>
                  <h4>A Proven Track Record (Since 2009)</h4>
                  <p>
                    With over 15 years in the Kochi logistics ecosystem, we have navigated the changing regulatory landscape of Kerala. Our long-standing relationships with industry giants like Blue Dart/DHL and OM Logistics are a testament to our professional standards.
                  </p>
                  <div className={styles.partners}>
                    <img src={useBaseUrl('/img/blue-dart.svg')} alt="Blue Dart" />
                    <img src={useBaseUrl('/img/om.svg')} alt="OM Logistics" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sideImage}>
            <img src={useBaseUrl('/img/brett-jordan-phUtWl8RyFE-unsplash.jpg')} alt="Secure containerized transport" />
          </div>
        </div>
      </div>
    </section>
  );
}
