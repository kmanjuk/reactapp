import ReactDOM from 'react-dom'
import { Features8 } from './Features8'

test('render Features8 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features8 />, div)
})
