import ReactDOM from 'react-dom'
import { CallToAction5 } from './CallToAction5'

test('render CallToAction5 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CallToAction5 />, div)
})

test('render CallToAction5 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CallToAction5
      pageData={{
        header: { header: 'BannerText Header' },
        imageBG: {
          imageBG:
            'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
        },
        buttonLink: { buttonLink: '/' },
        buttonText: { buttonText: 'Read More' },
      }}
    />,
    div,
  )
})
