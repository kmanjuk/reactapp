import ReactDOM from 'react-dom'
import { Features21 } from './Features21'

test('render Features21 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features21 />, div)
})
