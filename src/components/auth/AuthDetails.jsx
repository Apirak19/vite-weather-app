import React, {useEffect, useState} from 'react'
import { auth } from '../../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const AuthDetails = () => {
   const [authUser, setAuthUser] = useState(null)

   useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
         if (user) {
            setAuthUser(user)
         }
         else {
            setAuthUser(null)
         }
      })
      return () => {
         listen()
      }
   }, [])
   const userSignOut = () => {
      signOut(auth).then(() => {
         console.log(`sign out successfully`);
      }).catch(() => {
         console.error(`sign out failed`);
      })
   }
  return (
    <div>
        {authUser ? <div><p>{`signed in as ${authUser.email}`}</p><button onClick={userSignOut} >sign out</button></div> :
           <p>Create account</p>}
    </div>
  )
}

export default AuthDetails
