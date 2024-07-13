import ReactDOM from 'react-dom'
import { Features12 } from './Features12'

test('render Features12 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features12 />, div)
})
