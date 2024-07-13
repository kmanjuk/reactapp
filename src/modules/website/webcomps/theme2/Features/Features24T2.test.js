import ReactDOM from 'react-dom'
import { Features24 } from './Features24'

test('render Features24 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features24 />, div)
})
