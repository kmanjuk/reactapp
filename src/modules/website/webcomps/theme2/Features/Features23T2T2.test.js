import ReactDOM from 'react-dom'
import { Features23 } from './Features23'

test('render Features23 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features23 />, div)
})
