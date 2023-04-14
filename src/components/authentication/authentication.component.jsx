
import SignIn from './sign-in/sign-in.component'
import SignUp from './sign-up/sign-up.component'

import './authentication.styles.scss'

const Authentication = () => {
  return (
        <div className="auth-container">
        <SignIn/>
        <SignUp/>
        </div>
  )
}

export default Authentication
