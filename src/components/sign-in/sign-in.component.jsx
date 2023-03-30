import { signInWithGooglePopup } from '../../utils/firebase.util'
import {createUser} from '../../services/user-service'
import SignUp from '../sign-up/sign-up.component'

const SignIn = () => {

    const signInWithPopup = async () => {
        const {user} = await signInWithGooglePopup();
        const userDoument = await createUser(user)
        console.log(userDoument)
        
        
    }

    return(
        <>
        <h1>Sign in component</h1>
        <button onClick={signInWithPopup}>Sign in with google</button>
        <SignUp/>
        </>
    )
}

export default SignIn;