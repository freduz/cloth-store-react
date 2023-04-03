import { useContext } from "react";

import SignIn from "./sign-in/sign-in.component";
import SignUp from "./sign-up/sign-up.component"
import { UserContext } from "../../context/user.context";

import "./authentication.styles.scss";

const Authentication = () => {

    const {currentUser} = useContext(UserContext);

    console.log("hitt")

    return(
        <div className="auth-container">
        <SignIn/>
        <SignUp/>
        </div>
    )
}

export default Authentication;