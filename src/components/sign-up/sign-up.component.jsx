import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.util";
import { createUser } from "../../services/user-service";
import FormInput from '../form-input/form-input.component'
import Button from "../button/button.component";

const SignUp = () => {

    const defaultFormFields = {
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;

    const handleState = (event) => {
           const {name,value} = event.target;
           setFormFields({
            ...formFields,
            [name]:value
           })
    }

    const submitForm = async (event) => {
        event.preventDefault();
       if(formFields.password != formFields.confirmPassword) {
        alert("Passwords do not match")
        return;
       }

       try{
          const {user} = await createAuthUserWithEmailAndPassword(formFields.email,formFields.password);
          await createUser(user,{displayName:formFields.displayName})
       }
       catch(err){
        console.log(err.code);
        if(err.code === 'auth/email-already-in-use'){
            alert("Email already exists")
        }
        if(err.code === 'auth/weak-password'){
            alert("Password should be at least 6 characters")
        }
       }
        
    }


    return(
        <>
        <h1>Sign up with email and password</h1>
        <form onSubmit={submitForm}>
        <FormInput label="Display name" name="displayName" value={displayName} onChange={handleState}/>
        <FormInput label="Email" name="email" value={email} onChange={handleState}/>
        <FormInput label="Password" name="password" value={password} onChange={handleState}/>
        <FormInput label="Confirm password" name="confirmPassword" value={confirmPassword} onChange={handleState}/>
          <div>
            <Button type="submit">Sign Up</Button>
            
          </div>

        </form>
        </>
    )
}

export default SignUp;