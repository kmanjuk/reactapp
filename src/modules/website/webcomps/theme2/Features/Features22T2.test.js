import ReactDOM from 'react-dom'
import { Features22 } from './Features22'

test('render Features22 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features22 />, div)
})
