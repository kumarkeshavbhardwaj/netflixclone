import {createContext, useContext, useEffect, useState} from "react";
import {auth} from '../../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'

const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [user, setUser] = useState(null);

    function signUp(email, password) {
        console.log('signUp running of context')
        return createUserWithEmailAndPassword(auth, email, password).then((e)=>{
            console.log(e.user)
        });

    }

    function logOut() {
        return signOut(auth);
    }

    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

     useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        } );

        return () => {
            unsubscribe();
        }
    }), [];



    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    return useContext (AuthContext);
}