/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Hexabase API ガイド',
  tagline: 'Hexabase APIの情報をまとめています',
  url: 'https://b-eee.github.io',
  baseUrl: '/linker-api-doc/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'b-eee', // Usually your GitHub org/user name.
  projectName: 'linker-api-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Hexabase APIガイド',
      logo: {
        alt: 'Hexabase',
        src: 'img/hexabase_logo.png',
      },
      items: [
        {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'リファレンス',
            position: 'left',
        },
        {   to: 'blog',
            label: 'リリースノート',
            position: 'left'
        },
        {
            label: '開発ガイド^',
            href: 'https://b-eee.github.io/development_guide/',
            position: 'left',
        },
        {
            label: 'CLI^',
            href: 'https://www.npmjs.com/package/hexabase-cli',
            position: 'left',
        },
        {
            label: 'SDK^',
            href: 'https://b-eee.github.io/hexabase-sdk-docs/',
            position: 'left',
        },
        {
            label: 'コミュニティ',
            href: 'https://community.hexabase.com/',
            position: 'right',
        },
        {
            label: 'お問い合わせ',
            href: 'https://www.hexabase.com/contact-us/',
            position: 'right',
        },

      ],
    },
    algolia: {
        apiKey: 'YOUR_API_KEY',
        indexName: 'b-eee_linker-api-doc',
        // Optional: see doc section bellow
        contextualSearch: true,
        // Optional: Algolia search parameters
        searchParameters: {},
        //... other Algolia params
    },
    googleAnalytics: {
        trackingID: '',
        // Champs facultatifs.
        anonymizeIP: true, // Les IP doivent-elles être anonymisées ?
    },
    colorMode: {
        // https://v2.docusaurus.io/docs/api/themes/configuration#color-mode---dark-mode
        
        // "light" | "dark"
        defaultMode: 'light',
  
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,
    },
    footer: {
        style: 'dark',
        links: [
          {
            title: 'APIガイド',
            items: [
              {
                label: 'リファレンス',
                to: 'docs/',
              },
              {
                label: 'リリースノート',
                to: 'blog/',
              },
            ],
          },
          {
            title: 'リソース',
            items: [
              {
                label: '開発ガイド',
                href: 'https://b-eee.github.io/development_guide/',
              },
              {
                label: 'CLI',
                href: 'https://www.npmjs.com/package/hexabase-cli',
              },
              {
                label: 'SDK',
                href: 'https://b-eee.github.io/hexabase-sdk-docs/',
              },
            ],
          },
          {
            title: 'Hexabase',
            items: [
              {
                label: 'サービス',
                to: 'https://www.hexabase.com/service/',
              },
              {
                label: 'ニュース',
                to: 'https://www.hexabase.com/news/',
              },
              {
                label: 'コミュニティ',
                href: 'https://community.hexabase.com/',
              },
              {
                label: '企業情報',
                to: 'https://www.hexabase.com/company-background/',
              },
              {
                label: 'お問い合わせ',
                href: 'https://www.hexabase.com/contact-us/',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Hexabase, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
