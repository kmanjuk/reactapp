import ReactDOM from 'react-dom'
import { CallToAction8 } from './CallToAction8'

test('render CallToAction8 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CallToAction8 />, div)
})

test('render CallToAction8 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CallToAction8
      pageData={{
        header: { header: 'BannerText Header' },
        text: { text: 'Banner Text' },
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
