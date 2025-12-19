import React, {useState} from 'react';
import CONTACT_SCRIPT_URL from '@site/src/config/contact';
import styles from './styles.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'submitting'|'sent'|'error'>('idle');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    // Honeypot
    const trap = (form.elements as any)['_gotcha'];
    if (trap && trap.value) {
      e.preventDefault();
      setStatus('error');
      return;
    }

    // Basic required fields check
    const name = (form.elements as any)['name']?.value?.trim();
    const email = (form.elements as any)['email']?.value?.trim();
    const phone = (form.elements as any)['phone']?.value?.trim();
    if (!name || !email || !phone) {
      e.preventDefault();
      setStatus('error');
      return;
    }

    setStatus('submitting');
    // Let the browser post the form to the Apps Script via hidden iframe
    setTimeout(() => setStatus('sent'), 1500);
  }

  return (
    <section id="contact" className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Start Your Partnership Today</h2>
        <p className={styles.lead}>Required for 3PL/4PL Tenders &amp; Surface Cargo Inquiries.</p>

        <form
          id="contact-form"
          className={styles.form}
          action={CONTACT_SCRIPT_URL}
          method="post"
          target="hidden_iframe"
          onSubmit={onSubmit}
        >
          <input type="text" name="_gotcha" style={{display: 'none'}} aria-hidden="true" />

          <div className={styles.row}>
            <label>
              Name *
              <input name="name" type="text" required />
            </label>
            <label>
              Company Name
              <input name="company" type="text" />
            </label>
          </div>

          <div className={styles.row}>
            <label>
              Phone *
              <input name="phone" type="tel" required />
            </label>
            <label>
              Business Email *
              <input name="email" type="email" required />
            </label>
          </div>

          <div className={styles.row}>
            <label>
              Service Type
              <select name="serviceType">
                <option>B2B</option>
                <option>B2C</option>
              </select>
            </label>
            <label>
              Partnership Level
              <select name="partnershipLevel">
                <option>3PL Partner</option>
                <option>4PL Partner</option>
                <option>Standard Transport</option>
              </select>
            </label>
          </div>

          <div className={styles.row}>
            <label>
              Area of Location
              <input name="areaLocation" type="text" placeholder="Where is the cargo currently located?" />
            </label>
            <label>
              Service Destination
              <input name="serviceDestination" type="text" placeholder="Where do you need the service delivered?" />
            </label>
          </div>

          <label>
            Requirements
            <textarea name="requirements" rows={4} placeholder="Describe your cargo volume or frequency" />
          </label>

          <div className={styles.actions}>
            <input name="submit" type="submit" className="button button--primary" value={status === 'submitting' ? 'Sending…' : 'Submit Inquiry'} disabled={status === 'submitting'} />
            <div className={styles.status}>
              {status === 'submitting' && <span>Sending…</span>}
              {status === 'sent' && <span className={styles.success}>Thanks! We&apos;ll get back to you shortly.</span>}
              {status === 'error' && <span className={styles.error}>Please fill Name, Email and Phone.</span>}
            </div>
          </div>
        </form>

        <iframe name="hidden_iframe" style={{display: 'none'}} title="hidden-form-response" />

        <footer className={styles.footer}>
          <strong>JUST IN TIME SERVICES</strong> — Professionally Managed Since 2009<br />
          Address: [Insert Kochi Address] <br />
          Contact: [Insert Phone Number] | [Insert Email] <br />
          Proudly Serving: Blue Dart | DHL | OM Logistics
        </footer>
      </div>
    </section>
  );
}
