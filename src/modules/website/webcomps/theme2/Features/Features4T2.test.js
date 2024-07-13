import ReactDOM from 'react-dom'
import { Features4 } from './Features4'

test('render Features4 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features4 />, div)
})
