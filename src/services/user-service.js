import {db,docRef,getDocument,setDocument} from '../utils/firebase.util'

export const createUser = async(userDetails,additionalInfo={}) => {
    const userDocRef = await docRef(db,"user",userDetails.uid);
    const userSnapShot = await getDocument(userDocRef);
    if(!userSnapShot.exists()){
        const {displayName,email} = userDetails;
        try{
           await setDocument(userDocRef,{
            displayName,
            email,
            createdAt:new Date(),
            ...additionalInfo
           })
        }
        catch(err){
        }
    }

    return userDocRef;

}