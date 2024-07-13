import ReactDOM from 'react-dom'
import { Features9 } from './Features9'

test('render Features9 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features9 />, div)
})
