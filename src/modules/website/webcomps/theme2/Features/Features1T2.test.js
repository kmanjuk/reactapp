import ReactDOM from 'react-dom'
import { Features1 } from './Features1'

test('render Features1 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features1 />, div)
})
