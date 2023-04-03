import { useState } from "react"
import { useContext } from "react";

import './sign-in.styles.scss';
import Button from "../../button/button.component"
import FormInput from "../../form-input/form-input.component"
import {UserContext} from '../../../context/user.context'
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../../utils/firebase.util"
import { createUser } from "../../../services/user-service";

const SignIn = () => {

    const {setCurrentUser} = useContext(UserContext);
    const defaultFormFields = {
        email:'',
        password:''
    }

    const [formFields,setFormFields] = useState(defaultFormFields);

    const {email,password} = formFields;

    const handleState = (event) => {
        const {name,value} = event.target; 
        setFormFields({
            ...formFields,
            [name]:value
        })
    }

    const submitForm = async (event) =>{
        event.preventDefault();
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
        }catch(err){

        }
        
    }

    const signInWithPopup = async () => {
        const {user} = await signInWithGooglePopup();
    }

   return(
    <>
   <div className="sign-in-container">
   <h2>Already have an account?</h2>
    <span>Sign in with email and password</span>
       <form onSubmit={submitForm}>
       <FormInput label="Email" name="email" value={email} onChange={handleState}/>
       <FormInput label="Password" name="password" value={password} onChange={handleState}/>
         <div className="buttons-container">
           <Button type="submit">Sign In</Button>
           <Button buttonType="google" onClick={signInWithPopup}>Google Sign in</Button>      
         </div>

       </form>
   </div>
   </>
   )
}

export default SignIn;