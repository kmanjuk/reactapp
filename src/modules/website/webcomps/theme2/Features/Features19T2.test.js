import ReactDOM from 'react-dom'
import { Features19 } from './Features19'

test('render Features19 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features19 />, div)
})
