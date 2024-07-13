import ReactDOM from 'react-dom'
import { Features43 } from './Features43'

test('render Features43 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features43 />, div)
})
