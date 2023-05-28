import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.confg";
import { useEffect } from "react";

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

    const logOut = () => {
        signOut(auth)
    }

    // onAuthStateChanged
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser);
           setLoading(false)
		});
       
        return () => unsubscribe();
    }, [])

    const authInfo = {
		user,
		loading,
		createUser,
		updateUserNamePhoto,
		userLogin,
		logOut,
	};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;