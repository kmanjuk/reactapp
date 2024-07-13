import ReactDOM from 'react-dom'
import { Features31 } from './Features31'

test('render Features31component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features31 />, div)
})
