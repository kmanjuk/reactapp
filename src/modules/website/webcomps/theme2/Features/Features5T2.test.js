import ReactDOM from 'react-dom'
import { Features5 } from './Features5'

test('render Features5 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features5 />, div)
})
