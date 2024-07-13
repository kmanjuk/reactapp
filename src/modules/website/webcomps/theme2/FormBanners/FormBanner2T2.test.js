import ReactDOM from 'react-dom'
import { FormBanner2 } from './FormBanner2'

test('render FormBanner2 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormBanner2 />, div)
})

test('render FormBanner2 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <FormBanner2
      pageData={{
        header: {
          header: 'Header',
        },
        text: {
          text: 'Text',
        },
        buttonLink: {
          buttonLink: '/',
        },
        buttonText: {
          buttonText: 'Check',
        },
        image: {
          image: 'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
        },
      }}
    />,
    div,
  )
})
