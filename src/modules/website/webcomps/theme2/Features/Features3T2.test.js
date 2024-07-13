import ReactDOM from 'react-dom'
import { Features3 } from './Features3'

test('render Features3 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features3 />, div)
})
