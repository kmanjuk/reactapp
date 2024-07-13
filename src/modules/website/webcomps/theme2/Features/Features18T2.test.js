import ReactDOM from 'react-dom'
import { Features18 } from './Features18'

test('render Features18 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features18 />, div)
})
