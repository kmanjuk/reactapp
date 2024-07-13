import ReactDOM from 'react-dom'
import { Features40 } from './Features40'

test('render Features40 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features40 />, div)
})
