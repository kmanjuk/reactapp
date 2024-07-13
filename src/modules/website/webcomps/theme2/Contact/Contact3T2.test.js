import ReactDOM from 'react-dom'
import { Contact3 } from './Contact3'

test('render Contact3 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Contact3 />, div)
})
