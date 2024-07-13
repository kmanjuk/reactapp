import ReactDOM from 'react-dom'
import { CallToAction7 } from './CallToAction7'

test('render CallToAction7 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CallToAction7 />, div)
})

test('render CallToAction7 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CallToAction7
      pageData={{
        header: { header: 'BannerText Header' },
        buttonLink: { buttonLink: '/' },
        buttonText: { buttonText: 'Read More' },
        bgColor: { bgColor: 'info' },
      }}
    />,
    div,
  )
})
