import ReactDOM from 'react-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import { Banner7T2 } from './Banner7T2'

test('render Banner7T2 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Banner7T2 />, div)
})

test('render Banner7T2 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Banner7T2
      pageData={{
        content: {
          content: {
            header: 'BannerText',
            text: 'BannerText Bold',
            buttonLink: '/',
            buttonText: 'Read More',
            image:
              'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
            videoText: 'Intro',
            videoURL: 'Na0eAWfm7XU',
          },
        },
      }}
    />,
    div,
  )
})

test('render Banner7T2 component test setIsModalOpen', () => {
  render(
    <Banner7T2
      pageData={{
        content: {
          content: {
            header: 'BannerText',
            text: 'BannerText Bold',
            buttonLink: '/',
            buttonText: 'Read More',
            image:
              'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
            videoText: 'Intro',
            videoURL: 'Na0eAWfm7XU',
          },
        },
      }}
    />,
  )
  const button = screen.getByTestId('setIsModalOpen')
  fireEvent.click(button)
})
