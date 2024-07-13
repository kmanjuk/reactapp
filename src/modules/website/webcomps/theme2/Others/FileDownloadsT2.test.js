import ReactDOM from 'react-dom'
import { FileDownloads } from './FileDownloads'

test('render FileDownloads component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FileDownloads />, div)
})

test('render FileDownloads component without login', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <FileDownloads
      pageData={{
        className: {
          className: 'FileDownloads',
        },
        header: {
          header: 'Downloads',
        },
        headerText: {
          headerText: 'Download Application Forms',
        },
        childItems: [
          {
            className: {
              className: 'FileDownloadFiles',
            },
            type: {
              type: 'pdf',
            },
            fileName: {
              fileName: 'pdffile',
            },
            date: {
              date: '11-09-2022',
            },
            fileURL: {
              fileURL: '/',
            },
            childItems: [],
          },
        ],
      }}
    />,
    div,
  )
})

test('render FileDownloads component with login', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <FileDownloads
      isLoggedIn={true}
      pageData={{
        className: {
          className: 'FileDownloads',
        },
        header: {
          header: 'Downloads',
        },
        headerText: {
          headerText: 'Download Application Forms',
        },
        childItems: [
          {
            className: {
              className: 'FileDownloadFiles',
            },
            type: {
              type: 'pdf',
            },
            fileName: {
              fileName: 'pdffile',
            },
            date: {
              date: '11-09-2022',
            },
            fileURL: {
              fileURL: '/',
            },
            childItems: [],
          },
        ],
      }}
    />,
    div,
  )
})
