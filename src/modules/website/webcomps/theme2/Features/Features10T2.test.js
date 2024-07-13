import ReactDOM from 'react-dom'
import { Features10 } from './Features10'

test('render Features10 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features10 />, div)
})
