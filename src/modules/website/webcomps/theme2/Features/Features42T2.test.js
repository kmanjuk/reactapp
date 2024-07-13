import ReactDOM from 'react-dom'
import { Features42 } from './Features42'

test('render Features42 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features42 />, div)
})
