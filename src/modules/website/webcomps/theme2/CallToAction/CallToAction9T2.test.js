import ReactDOM from 'react-dom'
import { CallToAction9 } from './CallToAction9'

test('render CallToAction9 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CallToAction9 />, div)
})

test('render CallToAction9 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CallToAction9
      pageData={{
        header: { header: 'BannerText Header' },
        text: { text: 'Banner Text' },
        bgColor: { bgColor: 'info' },
        buttonLink: { buttonLink: '/' },
        buttonText: { buttonText: 'Read More' },
        imageBG: {
          imageBG:
            'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
        },
      }}
    />,
    div,
  )
})
