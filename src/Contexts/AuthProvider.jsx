import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // create user email passsword, sign up
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in email and password
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign in with google
    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // sign out google
    const signOutGoogle = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    // useEffect to observe user auth state change can be added here
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[]);

    const authInfo = {
      createUser,
      signInUser,
      signInWithGoogle,
      signOutGoogle,
      user,
      loading,
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;