import ReactDOM from 'react-dom'
import { Features48 } from './Features48'

test('render Features48 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features48 />, div)
})
