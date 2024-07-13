import ReactDOM from 'react-dom'
import { CallToAction3 } from './CallToAction3'

test('render CallToAction3 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CallToAction3 />, div)
})

test('render CallToAction3 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CallToAction3
      pageData={{
        header: { header: 'BannerText Header' },
        text: { text: 'BannerText Bold' },
        buttonLink: { buttonLink: '/' },
        buttonText: { buttonText: 'Read More' },
      }}
    />,
    div,
  )
})
