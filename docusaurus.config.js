// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/palenight');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/* @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Wiki Gcom',
  tagline: 'La Bible du Studio',
  url: 'https://gcommeuneidee.github.io',
  baseUrl: '/docusaurus/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gcommeuneidee', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  plugins: [
    [
      'docusaurus-plugin-dotenv',
      {
        path: "./.env", 
        systemvars: true, 
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'blocks',
        path: 'blocks',
        routeBasePath: 'blocks',
        sidebarPath: './sidebars.js',
        // ... autres options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'rgaa',
        path: 'rgaa',
        routeBasePath: 'rgaa',
        sidebarPath: './sidebars.js',
        // ... autres options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: './sidebars.js',
        // ... autres options
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/assets/css/custom.css',
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Gcommeuneidée',
          src: 'img/logo.svg',
        },
        items: [
          
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Starter',
          },
          {
            label:'Blocs WP',
            to: '/blocks/blocks/',
            position:'right',
          },
          {
            label: 'PECT',
            to: 'methode-css/',
            position: 'right',
          },
          {
            label: 'Coligrid',
            to: 'css-coligrid/',
            position: 'right',
          },
          {
            label: 'Checklist',
            to: 'checklist/',
            position: 'right',
          },
          {
            label:'RGAA',
            to: '/rgaa/intro/',
            position:'right',
          },
          {
            type: 'dropdown',
            label:'Guides',
            to: '/guides/guides/',
            position:'right',
            items: [
              {to: '/guides/guide-backing/', label: 'Backing'},
              {to: '/guides/guide-htaccess/', label: 'HTACCESS'},
              {to: '/guides/guide-imagik/', label: 'Imagik'},
              {to: '/guides/guide-git-vinci/', label: 'GIT & Vinci Construction'},
              {to: '/guides/guide-SSH/', label: 'SSH'},
              {to: '/guides/guide-gestion/', label: 'Échange avec le client'},
            ]
          },
          //{to: '/blog', label: 'Blocks WP', position: 'right'},
          {to: 'maintenance/', label: 'Maintenance', position: 'right'},
          // {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/gcommeuneidee',
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
                label: 'Tutorial',
                to: '/docs/intro/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Le site',
                href: 'https://www.gcommeuneidee.com/',
              },
              {
                label: 'Ticketing',
                href: 'https://gcommeuneide.freshdesk.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} G comme une idée.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php', 'powershell', 'scss']
      },
      
    }),
};

module.exports = config;
