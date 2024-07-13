import ReactDOM from 'react-dom'
import { Team3 } from './Team3'

test('render Team3 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Team3 />, div)
})

test('render Team3 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Team3
      pageData={{
        team3Header: {
          team3Header: 'Experienced & Professional Team',
        },
        team3Text: {
          team3Text: 'You can relay on our amazing team of experienced professionals',
        },
        childItems: [
          {
            className: {
              className: 'Team3Card',
            },
            image: {
              image:
                'https://thulishacdnstorage.blob.core.windows.net/resources/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/png-transparent-computer-icons-person-avatar-heroes-logo-silhouette-thumbnail.png',
            },
            name: {
              name: 'Kalavathi Medam',
            },
            title: {
              title: 'Teacher',
            },
            text: {
              text: 'Bal Bhavan Child Care',
            },
            size: {
              size: '3',
            },
            childItems: [
              {
                className: {
                  className: 'Team2SocialLinks',
                },
                link: {
                  link: 'https://facebook.com',
                },
                icon: {
                  icon: 'facebook',
                },
                childItems: [],
              },
            ],
          },
          {
            className: {
              className: 'Team1Card',
            },
            image: {
              image:
                'https://thulishacdnstorage.blob.core.windows.net/resources/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/png-transparent-computer-icons-person-avatar-heroes-logo-silhouette-thumbnail.png',
            },
            name: {
              name: 'Kalavathi Medam',
            },
            title: {
              title: 'Teacher',
            },
            text: {
              text: 'You can relay on our amazing team of experienced professionals',
            },
            size: {
              size: '3',
            },
            childItems: [
              {
                className: {
                  className: 'Team1SocialLinks',
                },
                link: {
                  link: 'https://facebook.com',
                },
                icon: {
                  icon: 'facebook',
                },
                childItems: [],
              },
            ],
          },
        ],
      }}
    />,
    div,
  )
})
