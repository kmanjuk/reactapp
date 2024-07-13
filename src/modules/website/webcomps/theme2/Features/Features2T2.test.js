import ReactDOM from 'react-dom'
import { Features2 } from './Features2'

test('render Features2 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features2 />, div)
})
