import ReactDOM from 'react-dom'
import { Features16 } from './Features16'

test('render Features16 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features16 />, div)
})
