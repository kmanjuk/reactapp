import ReactDOM from 'react-dom'
import { CallToAction1 } from './CallToAction1'

test('render CallToAction1 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CallToAction1 />, div)
})

test('render CallToAction1 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CallToAction1
      pageData={{
        header: { header: 'BannerText Header' },
        text: { text: 'BannerText Bold' },
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
