import ReactDOM from 'react-dom'
import { Features7 } from './Features7'

test('render Features7 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features7 />, div)
})
