import ReactDOM from 'react-dom'
import { CallToAction4 } from './CallToAction4'

test('render CallToAction4 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CallToAction4 />, div)
})

test('render CallToAction4 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CallToAction4
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
