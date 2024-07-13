import ReactDOM from 'react-dom'
import { Features15 } from './Features15'

test('render Features15 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features15 />, div)
})
