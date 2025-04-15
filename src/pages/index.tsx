import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to EagleFi
        </Heading>
        <p className="hero__subtitle">
          Your Gateway to Decentralized Trading on Massa
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started →
          </Link>
          <Link
            className="button button--outline button--lg margin-left--md"
            href="https://eaglefi.io"
          >
            Launch App 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`EagleFi - Decentralized Exchange on Massa`}
      description="Swap, earn, and build on Massa's lightning-fast decentralized exchange"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            {/* <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="text--center padding-vert--xl">
                  <h2 className="text--primary">Why EagleFi?</h2>
                  <p className="padding-horiz--lg">
                    Built by developers for the decentralized future, EagleFi
                    combines Massa's industry-leading speed (10,000+ TPS) with
                    battle-tested security to deliver the ultimate DEX
                    experience.
                  </p>
                </div>
              </div>
            </div> */}
            <HomepageFeatures />
            <div className="row padding-vert--xl">
              <div className="col col--6">
                <div className="card">
                  <div className="card__header">
                    <h3>For Traders</h3>
                  </div>
                  <div className="card__body">
                    <ul>
                      <li>⚡ Sub-second trades with near-zero fees</li>
                      <li>🔒 Non-custodial swapping</li>
                      <li>📈 Advanced price charts</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className="card">
                  <div className="card__header">
                    <h3>For Builders</h3>
                  </div>
                  <div className="card__body">
                    <ul>
                      <li>🛠️ 1-click token creation</li>
                      <li>💧 Instant liquidity pools</li>
                      <li>📑 Open-source & audited contracts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
