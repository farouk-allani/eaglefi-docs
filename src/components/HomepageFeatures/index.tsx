import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  src: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Instant Swaps",
    src: require("@site/static/img/swap.png").default,
    description: (
      <>Trade any MRC-20 token in seconds with Massa's 10,000+ TPS network.</>
    ),
  },
  {
    title: "Token Factory",
    src: require("@site/static/img/token factory.png").default,
    description: (
      <>
        Launch your own token in minutes with our permissionless creation tool.
      </>
    ),
  },
  {
    title: "Earn Yield",
    src: require("@site/static/img/earn.png").default,
    description: (
      <>Provide liquidity and earn fees from every trade in your pools.</>
    ),
  },
];

function Feature({ title, src, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={src} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
