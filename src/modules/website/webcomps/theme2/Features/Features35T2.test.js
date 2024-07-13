import ReactDOM from 'react-dom'
import { Features35 } from './Features35'

test('render Features35 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features35 />, div)
})
