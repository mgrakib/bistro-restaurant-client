import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../Firebase/Firebase.confg";
import { useEffect } from "react";
import axios from "axios";


export const AuthContext = createContext({});
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // sing up 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update usr name photo 
    const updateUserNamePhoto = (dName, pURL) => {
        return updateProfile(auth.currentUser, {
			displayName: dName,
			photoURL: pURL,
		});
    }

    // login 
    const userLogin = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password);

    }

    const googleProvider = new GoogleAuthProvider();
    
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        signOut(auth)
    }

    // onAuthStateChanged
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser);
       
           if (currentUser) {
            const loogedUser = { email: currentUser.email };
            
               axios
                   .post(`http://localhost:5000/jwt`, loogedUser)
                   .then(res =>
                       localStorage.setItem("access-token", res.data.token),
                setLoading(false)
					);    
           } else {
              localStorage.removeItem("access-token");
           }  


          
		});
       
        return () => unsubscribe();
    }, [])

    const authInfo = {
		user,
		loading,
		createUser,
		updateUserNamePhoto,
        userLogin,
        googleLogin,
		logOut,
	};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;