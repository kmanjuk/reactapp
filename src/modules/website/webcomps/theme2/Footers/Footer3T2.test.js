import ReactDOM from 'react-dom'
import { Footer3 } from './Footer3'

test('render Footer3 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer3 />, div)
})

test('render Footer3 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Footer3
      pageData={{
        footerLogo: {
          footerLogo:
            'https://thulishacdnstorage.blob.core.windows.net/resources/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/logo.png',
        },
        address: {
          address: 'Redmond, WA',
        },
        phone: {
          phone: '+1 234-567-8901',
        },
        email: {
          email: 'info@bal-bhavan.com',
        },
        footerText: {
          footerText:
            'Bal Bhavan mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child',
        },
        linkHeader: {
          linkHeader: 'Resources',
        },
        copyright: {
          copyright: '© All Rights Reserved by Bal Bhavan Child Care.',
        },
        androidLink: {
          androidLink: 'https://play.google.com/apps/',
        },
        appleLink: {
          appleLink: 'https://www.apple.com/in/app-store/',
        },
        downloadText: {
          downloadText: 'Download Apps',
        },
        childItems: [
          {
            className: {
              className: 'Footer1SocialLinks',
            },
            icon: {
              icon: 'facebook',
            },
            link: {
              link: 'https://www.facebook.com/BalBhavan.Redmond',
            },
            childItems: [],
          },
          {
            className: {
              className: 'Footer1LinkItem',
            },
            linkName: {
              linkName: 'Privacy Policy',
            },
            link: {
              link: '/policies/privacy-policy',
            },
            childItems: [],
          },
          {
            className: {
              className: 'Footer1SocialLinks',
            },
            icon: {
              icon: 'twitter',
            },
            link: {
              link: 'https://twitter.com',
            },
            childItems: [],
          },
          {
            className: {
              className: 'Footer1LinkItem',
            },
            linkName: {
              linkName: 'Home',
            },
            link: {
              link: '/',
            },
            childItems: [],
          },
          {
            className: {
              className: 'Footer1LinkItem',
            },
            linkName: {
              linkName: 'About',
            },
            link: {
              link: '/about',
            },
            childItems: [],
          },
          {
            className: {
              className: 'Footer1LinkItem',
            },
            linkName: {
              linkName: 'Contact',
            },
            link: {
              link: '/contact',
            },
            childItems: [],
          },
        ],
      }}
    />,
    div,
  )
})
