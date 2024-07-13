import ReactDOM from 'react-dom'
import { Banner3T2 } from './Banner3T2'

test('render Banner3 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Banner3T2 />, div)
})

test('render Banner3 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Banner3T2
      pageData={{
        content: {
          content: {
            text: 'BannerText',
            textBold: 'BannerText Bold',
            textColored: 'BannerText Color',
            buttonLink: '/',
            buttonText: 'Read More',
          },
        },
      }}
    />,
    div,
  )
})
