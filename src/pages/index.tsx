import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageSections from '@site/src/components/HomepageSections';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const banner = useBaseUrl('/img/banner.jpg');
  const bannerWebp = useBaseUrl('/img/banner.webp');
  const bannerSmall = useBaseUrl('/img/banner-small.jpg');
  const bannerSmallWebp = useBaseUrl('/img/banner-small.webp');
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundImage: `image-set(url(${bannerWebp}) type('image/webp') 1x, url(${banner}) type('image/jpeg') 1x)`,
        ['--banner-image' as any]: `url(${bannerWebp})`,
        ['--banner-small-image' as any]: `url(${bannerSmallWebp})`,
      }}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="#contact">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Just In Time Services — surface cargo and last-mile delivery in Kochi">
      <HomepageHeader />
      <HomepageSections />
    </Layout>
  );
}
