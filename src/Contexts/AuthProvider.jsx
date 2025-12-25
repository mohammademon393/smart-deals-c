import React from 'react';
import { AuthContext } from './AuthContext';
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    // create user email passsword signin 
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
      createUser,
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;