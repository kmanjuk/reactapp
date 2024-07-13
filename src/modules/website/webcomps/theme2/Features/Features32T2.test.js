import ReactDOM from 'react-dom'
import { Features32 } from './Features32'

test('render Features32 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features32 />, div)
})
