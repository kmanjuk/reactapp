import ReactDOM from 'react-dom'
import { Counter1 } from './Counter1'

test('render Counter1 component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Counter1 />, div)
})

test('render Counter1 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Counter1
      pageData={{
        className: {
          className: 'Counter1',
        },
        headerRequired: {
          headerRequired: '0',
        },
        header: {
          header: '.',
        },
        headerText: {
          headerText: '.',
        },
        style: {
          style: 'bg-info',
        },
        childItems: [
          {
            className: {
              className: 'Counter1Item',
            },
            icon: {
              icon: 'icon-Business-ManWoman',
            },
            name: {
              name: 'Dedicated Staff',
            },
            number: {
              number: '8',
            },
            childItems: [],
          },
          {
            className: {
              className: 'Counter1Item',
            },
            icon: {
              icon: 'icon-Trophy',
            },
            name: {
              name: 'Programs',
            },
            number: {
              number: '12',
            },
            childItems: [],
          },
        ],
      }}
    />,
    div,
  )
})
