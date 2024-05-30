import { defineConfig } from 'vocs'

export default defineConfig({

  logoUrl: { 
    light: '/logo/logo-light.svg', 
    dark: '/logo/logo-dark.svg'
  }, 
  iconUrl: '/img/favicon.ico',
  title: 'ZenGuard | Documentation',
  sidebar: [
    {
      text: 'Introduction',
      link: '/introduction',
    },
    {
      text: 'Build Modules',
      collapsed: false,
      items: [
      { 
        text: 'Getting Started',  
        link: '/getting-started/build-modules',
      },
      { 
        text: 'Interoperable Modules',  
        link: '/getting-started/interoperable-spec',
      },
      { 
        text: 'Build using ERC-7579',  
        link: '/getting-started/erc-7579',
      },
      { 
        text: 'Build using ERC-6900',  
        link: '/getting-started/erc-6900',
      }

      ],
    },
    {
      text: 'Publish Modules',
      collapsed: true,
      items: [
        { 
          text: 'Publish Module',  
          link: '/publish/publish-modules',
        },
      ],
    },
    {
      text: 'Audit Modules',
      collapsed: true,
      items: [
        { 
          text: 'Audit Module',  
          link: '/audit/audit-modules',
        },
      ],
    },
    {
      text: 'Explore Modules',
      link: '/explore-modules',
    },
    {
      text: 'Integrate Modules',
      collapsed: true,
      items: [
        { 
          text: 'Getting Started',  
          link: '/integrate/integrate-modules',
        },
      ],
    },
    {
      text: 'Account Abstraction',
      collapsed: true,
      items: [
        { 
          text: 'Basics of AA',  
          link: '/aa-guide/intro',
        },
      ],
    },
  ],

  topNav: [ 
    { text: 'Dashboard', link: 'https://dashboard.zenguard.xyz' }, 
    { text: 'Explore Modules', link: 'https://explore.zenguard.xyz' }, 
  ],

  socials: [ 
    { 
      icon: 'github', 
      link: 'https://github.com/zenguardxyz', 
    }, 
    { 
      icon: 'x', 
      link: 'https://x.com/zenguardxyz', 
    }, 
  ],
  theme: { 
    accentColor: {light: '#709D60', dark: "#7CC562"},
  } 
})
