import ReactDOM from 'react-dom'
import { Features45 } from './Features45'

test('render Features45 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Features45 />, div)
})
