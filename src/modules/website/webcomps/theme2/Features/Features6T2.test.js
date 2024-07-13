import ReactDOM from 'react-dom'
import { Features6 } from './Features6'

test('render Features6 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features6 />, div)
})
