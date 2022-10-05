/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'OwlGrid',
    tagline: 'Create cloud applications in a minute.',
    url: 'https://docs.owlgrid.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'owlgrid', // Usually your GitHub org/user name.
    projectName: 'doc-public-front', // Usually your repo name.
    themeConfig: {
        colorMode: {
            disableSwitch: false,
            respectPrefersColorScheme: true
        },
        navbar: {
            title: 'OwlGrid',
            logo: {
                alt: 'OwlGrid Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'general/introduction/intro',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    href: 'https://github.com/owlgrid/doc-public-front',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'OwlGrid',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/docs/general/introduction/intro',
                        },
                        {
                            label: 'Portal',
                            href: 'https://owlgrid.app',
                        },
                        {
                            label: 'OwlGrid Home',
                            to: 'https://owlgrid.com',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/owlgrid',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/owlgrid',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/owlgrid',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/owlgrid/doc-public-front',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} OwlGrid`,
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
                        'https://github.com/owlgrid/doc-public-front/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
