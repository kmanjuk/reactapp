import ReactDOM from 'react-dom'
import { Banner1T2 } from './Banner1T2'

const pageData = {
  pageData: {
    content: {
      content: {
        text: 'Play, Learn & Grow',
        textColored: 'Bal Bhavan Child Care',
        buttonText: 'Read More',
        buttonClass: 'primary',
        buttonLink: '/about',
        image: 'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
        cssClass: 'mb-5',
        bgColor: '0',
      },
    },
  },
}

const pageData2 = {
  pageData: {
    content: {
      content: {
        text: 'Play, Learn & Grow',
        textColored: 'Bal Bhavan Child Care',
        buttonText: 'Read More',
        buttonClass: 'primary',
        buttonLink: '/about',
        image: 'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
        cssClass: 'mb-5',
        bgColor: '#FEFEFE',
      },
    },
  },
}

test('render Banner1T2 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Banner1T2 />, div)
})

test('render Banner1T2 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Banner1T2 pageData={pageData} />, div)
})

test('render Banner1T2 component with bgColor', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Banner1T2 pageData={pageData2} />, div)
})
