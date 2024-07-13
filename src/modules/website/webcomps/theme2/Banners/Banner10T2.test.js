import ReactDOM from 'react-dom'
import { Banner10T2 } from './Banner10T2'

test('render Banner10T2 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Banner10T2 />, div)
})

test('render Banner10T2 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Banner10T2
      pageData={{
        content: {
          content: {
            badge: 'Badge',
            header: 'BannerText Header',
            text: 'BannerText Bold',
            buttonLink: '/',
            buttonText: 'Read More',
            imageBG:
              'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
          },
        },
      }}
    />,
    div,
  )
})
