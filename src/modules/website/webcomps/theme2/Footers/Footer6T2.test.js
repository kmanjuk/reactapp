import ReactDOM from 'react-dom'
import { Footer6 } from './Footer6'

test('render Footer6 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer6 />, div)
})

test('render Footer6 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Footer6
      pageData={{
        copyright: {
          copyright: '© All Rights Reserved by Bal Bhavan Child Care.',
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
