/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
 

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };


  useEffect(() => {
  setPersistence(auth, browserLocalPersistence)
    .then(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);

        if (currentUser) {
          const userInfo = { email: currentUser.email };
          axiosPublic.post("/jwt", userInfo).then((res) => {
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
            }
          });
        } else {
          localStorage.removeItem("access-token");
        }

        setLoading(false);
      });

      return () => unsubscribe();
    })
    .catch((error) => {
      console.error("Firebase persistence error:", error);
      setLoading(false);
    });
}, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
