import ReactDOM from 'react-dom'
import { Features20 } from './Features20'

test('render Features20 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features20 />, div)
})
