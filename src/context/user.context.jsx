import { createContext, useContext, useEffect, useState } from "react";
import { authStateChangeListener } from "../utils/firebase.util";
import { createUser } from "../services/user-service";

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:() => null
});


export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    useEffect(() => {
       const subscription = authStateChangeListener((user) => {
            if(user){
                createUser(user)
            }
            setCurrentUser(user)
       })

       return subscription;
    },[])
    const user = {currentUser,setCurrentUser};
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export const GetCurrentUser = () => useContext(UserContext);