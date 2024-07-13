import ReactDOM from 'react-dom'
import { CallToAction2 } from './CallToAction2'

test('render CallToAction2 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CallToAction2 />, div)
})

test('render CallToAction2 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <CallToAction2
      pageData={{
        header: { header: 'BannerText Header' },
        text: { text: 'BannerText Bold' },
        button1Link: { button1Link: '/' },
        button1Text: { button1Text: 'Read More' },
        button2Link: { button2Link: '/' },
        button2Text: { button2Text: 'Contact' },
      }}
    />,
    div,
  )
})
