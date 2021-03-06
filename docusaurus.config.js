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
  // If you have installed @docusaurus/preset-classic, you don't need to install it as a dependency.
  // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-analytics
  // plugins: ['@docusaurus/plugin-google-analytics'], 
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
    googleAnalytics: {
        trackingID: 'G-L7EXQF8LM9',
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
    algolia: {
        apiKey: '6564d5269890c3919c126afbc017abae',
        indexName: 'linker-api-doc',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        //... other Algolia params
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
  plugins: [
    // [require.resolve('@cmfcmf/docusaurus-search-local'), {
    //     // whether to index docs pages
    //     indexDocs: true,
    //     // must start with "/" and correspond to the routeBasePath configured for the docs plugin
    //     // use "/" if you use docs-only-mode
    //     // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/docs-introduction#docs-only-mode)
    //     docsRouteBasePath: '/docs',

    //     // Whether to also index the titles of the parent categories in the sidebar of a doc page.
    //     // 0 disables this feature.
    //     // 1 indexes the direct parent category in the sidebar of a doc page
    //     // 2 indexes up to two nested parent categories of a doc page
    //     // 3...
    //     //
    //     // Do _not_ use Infinity, the value must be a JSON-serializable integer.
    //     indexDocSidebarParentCategories: 0,

    //     // whether to index blog pages
    //     indexBlog: true,
    //     // must start with "/" and correspond to the routeBasePath configured for the blog plugin
    //     // use "/" if you use blog-only-mode
    //     // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/blog#blog-only-mode)
    //     blogRouteBasePath: '/blog',

    //     // whether to index static pages
    //     // /404.html is never indexed
    //     indexPages: false,

    //     // language of your documentation, see next section
    //     language: ["en", "ja"],

    //     // lunr.js-specific settings
    //     lunr: {
    //         // When indexing your documents, their content is split into "tokens".
    //         // Text entered into the search box is also tokenized.
    //         // This setting configures the separator used to determine where to split the text into tokens.
    //         // By default, it splits the text at whitespace and dashes.
    //         //
    //         // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
    //         tokenizerSeparator: /[\s\-\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]+/gu
    //     }
    // }]
  ],
};
