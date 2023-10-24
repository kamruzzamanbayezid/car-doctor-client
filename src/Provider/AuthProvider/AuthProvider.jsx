import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../config/firebase.confiq";

export const AuthContent = createContext();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState({});
      const [loading, setLoading] = useState(true);

      // login in with google
      const googleLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
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
                  console.log('user:', user);
            })

            return () => {
                  unSubscribe();
            }
      }, [])


      const authentications = {
            googleLogin,
            user,
            logOut
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