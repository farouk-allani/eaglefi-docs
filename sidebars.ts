import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "EagleFi Docs",
      items: [
        "intro",
        "getting-started",
        "portfolio",
        "token-creation",
        "pools",
        "swapping",
        "faq",
      ],
    },
  ],
};

export default sidebars;
