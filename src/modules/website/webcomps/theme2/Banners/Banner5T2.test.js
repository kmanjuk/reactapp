import ReactDOM from 'react-dom'
import { Banner5T2 } from './Banner5T2'

test('render Banner5T2 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Banner5T2 />, div)
})

test('render Banner5T2 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Banner5T2
      pageData={{
        content: {
          content: {
            header: 'Banner Header',
            text: 'BannerText',
            button1Link: '/',
            button1Text: 'Read More',
            button2Link: '/',
            button2Text: 'Read More',
            image:
              'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
            videoTitle: 'Video Header',
            videoText: 'Video Text',
            videoURL: 'Na0eAWfm7XU',
          },
        },
      }}
    />,
    div,
  )
})
