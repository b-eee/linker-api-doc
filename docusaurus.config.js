/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Hexabase Documentation',
  tagline: 'References for Developers',
  url: 'https://b-eee.github.io',
  baseUrl: '/linker-api-doc/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'b-eee', // Usually your GitHub org/user name.
  projectName: 'linker-api-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'APIガイド',
      logo: {
        alt: 'Hexabase',
        src: 'img/hexabase_logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documents',
          position: 'left',
        },
        {to: 'blog', label: 'Releases', position: 'left'},
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
          title: 'Learn',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://community.hexabase.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hexabase',
            },
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
