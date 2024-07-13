import ReactDOM from 'react-dom'
import { Features41 } from './Features41'

test('render Features41 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features41 />, div)
})
