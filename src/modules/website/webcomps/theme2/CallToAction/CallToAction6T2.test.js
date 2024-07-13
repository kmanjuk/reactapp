import ReactDOM from 'react-dom'
import { CallToAction6 } from './CallToAction6'

test('render CallToAction6 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CallToAction6 />, div)
})

test('render CallToAction6 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CallToAction6
      pageData={{
        header: { header: 'BannerText Header' },
        text: { text: 'Banner Text' },
        image: {
          image: 'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
        },
        buttonLink: { buttonLink: '/' },
        buttonText: { buttonText: 'Read More' },
      }}
    />,
    div,
  )
})
