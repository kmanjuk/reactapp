import ReactDOM from 'react-dom'
import { Features25 } from './Features25'

test('render Features25 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features25 />, div)
})
