import ReactDOM from 'react-dom'
import { Banner2T2 } from './Banner2T2'

test('render Banner2T2 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Banner2T2
      pageData={{
        content: {
          content: {
            header: 'Banner Header',
            text: 'BannerText',
            button1Link: '/',
            button1Text: 'Read More',
            button2Link: '/',
            button2Text: 'Read More',
            image: '',
          },
        },
      }}
    />,
    div,
  )
})
