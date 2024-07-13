import ReactDOM from 'react-dom'
import { Team1 } from './Team1'

test('render Team1 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Team1 />, div)
})

test('render Team1 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Team1
      pageData={{
        team1Header: {
          team2Header: 'Experienced & Professional Team',
        },
        team1Text: {
          team2Text: 'You can relay on our amazing team of experienced professionals',
        },
        childItems: [
          {
            className: {
              className: 'Team1Card',
            },
            image: {
              image: 'name',
            },
            name: {
              name: 'Kalavathi Medam',
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
