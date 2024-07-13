import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import { VideoImageGallery } from './VideoImageGallery'

test('render VideoImageGallery component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<VideoImageGallery />, div)
})

test('render VideoImageGallery image component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <VideoImageGallery
      pageData={{
        className: {
          className: 'VideoImageGallery',
        },
        title: {
          title: 'title',
        },
        text: {
          text: 'text',
        },
        class: {
          class: 'mt-3',
        },
        childItems: [
          {
            className: {
              className: 'VideoImageGalleryItem',
            },
            size: {
              size: '4',
            },
            type: {
              type: 'image',
            },
            url: {
              url: 'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
            },
            childItems: [],
          },
        ],
      }}
    />,
    div,
  )
})

test('render VideoImageGallery video component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <VideoImageGallery
      pageData={{
        className: {
          className: 'VideoImageGallery',
        },
        title: {
          title: 'title',
        },
        text: {
          text: 'text',
        },
        class: {
          class: 'mt-3',
        },
        childItems: [
          {
            className: {
              className: 'VideoImageGalleryItem',
            },
            size: {
              size: '4',
            },
            type: {
              type: 'video',
            },
            url: {
              url: 'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
            },
            childItems: [],
          },
        ],
      }}
    />,
    div,
  )
})

test('render VideoImageGallery component test videoModalFunc', () => {
  render(
    <VideoImageGallery
      pageData={{
        className: {
          className: 'VideoImageGallery',
        },
        title: {
          title: 'title',
        },
        text: {
          text: 'text',
        },
        class: {
          class: 'mt-3',
        },
        childItems: [
          {
            className: {
              className: 'VideoImageGalleryItem',
            },
            size: {
              size: '4',
            },
            type: {
              type: 'image',
            },
            url: {
              url: 'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
            },
            childItems: [],
          },
        ],
      }}
    />,
  )
  const button = screen.getByTestId('videoMadalFunction')
  fireEvent.click(button)
})

test('render VideoImageGallery component test setIsModalOpen', () => {
  render(
    <VideoImageGallery
      pageData={{
        className: {
          className: 'VideoImageGallery',
        },
        title: {
          title: 'title',
        },
        text: {
          text: 'text',
        },
        class: {
          class: 'mt-3',
        },
        childItems: [
          {
            className: {
              className: 'VideoImageGalleryItem',
            },
            size: {
              size: '4',
            },
            type: {
              type: 'image',
            },
            url: {
              url: 'https://thulisha-cdn.azureedge.net/A5B7ED25-A6E7-46C3-990C-B7A0C1590B33/img1.png',
            },
            childItems: [],
          },
        ],
      }}
    />,
  )
  const button1 = screen.getByTestId('videoMadalFunction')
  fireEvent.click(button1)
  const button = screen.getByTestId('setIsModalOpen')
  fireEvent.click(button)
})
