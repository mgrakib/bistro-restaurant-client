import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/Firebase.confg";

export const AuthContext = createContext({});
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // sing up 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update usr name photo 
    const updateUserNamePhoto = (dName, pURL) => {
        return updateProfile(auth.currentUser, {
			displayName: dName,
			photoURL: pURL,
		});
    }

    const userLogin = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);

    }

    const authInfo = {
		user,
		loading,
		createUser,
		updateUserNamePhoto,
		userLogin,
	};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;