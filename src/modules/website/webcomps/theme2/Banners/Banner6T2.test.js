import ReactDOM from 'react-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import { Banner6T2 } from './Banner6T2'

test('render Banner6T2 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Banner6T2 />, div)
})

test('render Banner6T2 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Banner6T2
      pageData={{
        content: {
          content: {
            bgColor: 'success',
            badge: 'Banner Header',
            text: 'BannerText',
            image:
              'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
            videomp4:
              'https://thulishacdnstorage.blob.core.windows.net/resources/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/demo_video.mp4',
            videoogg:
              'https://thulishacdnstorage.blob.core.windows.net/resources/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/demo_video.ogg',
            videoPoster:
              'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
          },
        },
      }}
    />,
    div,
  )
})

test('render Banner6T2 component test setVideoPlaying', () => {
  render(
    <Banner6T2
      pageData={{
        content: {
          content: {
            bgColor: 'success',
            badge: 'Banner Header',
            text: 'BannerText',
            image:
              'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
            videomp4:
              'https://thulishacdnstorage.blob.core.windows.net/resources/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/demo_video.mp4',
            videoogg:
              'https://thulishacdnstorage.blob.core.windows.net/resources/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/demo_video.ogg',
            videoPoster:
              'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
          },
        },
      }}
    />,
  )
  const button = screen.getByTestId('setVideoPlaying')
  fireEvent.click(button)
})
