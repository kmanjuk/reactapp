import ReactDOM from 'react-dom'
import { Features14 } from './Features14'

test('render Features14 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features14 />, div)
})
