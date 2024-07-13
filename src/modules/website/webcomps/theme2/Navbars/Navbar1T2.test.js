import ReactDOM from 'react-dom'
import { Navbar1 } from './Navbar1'

const userSignedIn = jest.fn()
const userSignedOut = jest.fn()

test('render Navbar1 component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Navbar1
      auth={{ userSignedIn, userSignedOut }}
      sessionIsActive={true}
      authData={authData}
      setRoleAccess={setRoleAccess}
      setRoleModal={setRoleModal}
    />,
    div,
  )
})
