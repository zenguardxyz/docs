// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZenGuard',
  tagline: 'Programmable wallet for your peace of mind',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.zenguard,xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zenguardxyz', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zenguardxyz/docs/tree/main/packages/create-docusaurus/templates/shared/',
            routeBasePath: '/',
        },
        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'Documentation',
        logo: {
          alt: 'ZenGuard Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://demo.zenguard.xyz',
            position: 'left',
            label: 'Try Demo',
          },
          {
            href: 'https://disocrd.zenguard.xyz',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/zenguardxyz',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://disocrd.zenguard.xyz',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/zenguardxyz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Try Demo',
                href: 'https://demo.zenguard.xyz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/zenguardxyz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Crafted with ❤️ by ZenGuard. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
