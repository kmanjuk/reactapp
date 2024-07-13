import ReactDOM from 'react-dom'
import { Features17 } from './Features17'

test('render Features17 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features17 />, div)
})
