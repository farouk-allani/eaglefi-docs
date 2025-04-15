import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "EagleFi Docs",
  tagline: "Your Decentralized Exchange on Massa Blockchain",
  url: "https://docs.eaglefi.io", // Update later with your domain
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "eaglefi", // Your GitHub org or username
  projectName: "eaglefi",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/eaglefi/eaglefi-docs/edit/main/", // Update with your repo
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/eaglefi-social-card.jpg", // Add a social card image if you have one
    navbar: {
      title: "EagleFi",
      logo: {
        alt: "EagleFi Logo",
        src: "img/logo header.png",
      },
      items: [
        { to: "/docs/intro", label: "Docs", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://eaglefi.io",
          label: "EagleFi App",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [{ label: "Introduction", to: "/docs/intro" }],
        },
        {
          title: "Community",
          items: [
            { label: "X", href: "https://x.com/eaglefi" }, // Update with your X handle
            { label: "Discord", href: "https://discord.gg/eaglefi" }, // Update if applicable
          ],
        },
        {
          title: "More",
          items: [
            { label: "GitHub", href: "https://github.com/eaglefi" }, // Update with your repo
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EagleFi. Built with ❤️ by the EagleFi Team.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Config["themeConfig"],
};

export default config;
