import ReactDOM from 'react-dom'
import { Features30 } from './Features30'

test('render Features30 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features30 />, div)
})
