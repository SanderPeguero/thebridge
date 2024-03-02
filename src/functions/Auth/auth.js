import { auth } from "../../firebase/firebase"
import { signInWithEmailAndPassword, signOut} from "firebase/auth"
export const LogIn = (user) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.getIdToken().then((value) => {
                localStorage.setItem("Token", value)
                localStorage.setItem("DisplayName", user.displayName)
                // setUser({token: value, displayName: user.displayName})
            })
        })
        .catch((error) => {
            console.log(error)
        });

}

export const Logout = () => {

    signOut(auth).then(() => {
        setUser(null)
        console.log("Sign-out successful.")
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
}