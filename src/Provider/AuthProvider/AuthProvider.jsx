import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../config/firebase.confiq";

export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState({});
      const [loading, setLoading] = useState(true);

      // login in with google
      const googleLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
      }

      // login with facebook
      const facebookLogin = () => {
            return signInWithPopup(auth, facebookProvider);
      }

      // create user
      const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);
      }

      // update user
      const userUpdate = (name, photo) => {
            setLoading(true)
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            })
      }

      // logIn
      const logIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
      }

      // logOut
      const logOut = () => {
            setLoading(true)
            return signOut(auth);
      }



      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (user) => {
                  setUser(user);
                  setLoading(false);
            })

            return () => {
                  unSubscribe();
            }
      }, [])


      const authentications = {
            googleLogin,
            facebookLogin,
            user,
            logOut,
            createUser,
            userUpdate,
            logIn,
            loading
      }

      return (
            <AuthContent.Provider value={authentications}>
                  {children}
            </AuthContent.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.node
}

export default AuthProvider;