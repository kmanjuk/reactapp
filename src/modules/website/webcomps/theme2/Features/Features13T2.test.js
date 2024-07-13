import ReactDOM from 'react-dom'
import { Features13 } from './Features13'

test('render Features13 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features13 />, div)
})
