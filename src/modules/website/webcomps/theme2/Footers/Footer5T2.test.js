import ReactDOM from 'react-dom'
import { Footer5 } from './Footer5'

test('render Footer5 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer5 />, div)
})

test('render Footer5 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Footer5
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

        childItems: [
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
