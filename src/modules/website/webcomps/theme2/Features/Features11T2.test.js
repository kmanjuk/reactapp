import ReactDOM from 'react-dom'
import { Features11 } from './Features11'

test('render Features11 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features11 />, div)
})
