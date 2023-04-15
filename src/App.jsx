import "./App.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./Firebase/Firebase.config";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const logUser = result.user;
        console.log(logUser);
        setUser(logUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        // const outUser = result.user;
        // console.log(outUser);
        setUser(null)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>Firebase+Vite</h1>
      {!user ? 
        <button onClick={handleGoogleSignIn}>Google signIn</button>
       : 
        <button onClick={handleGoogleSignOut}>Google Sign out</button>
      }
      {user && 
        <div>
          <p>Name:{user.displayName}</p>
          <img src={user.photoURL} alt="" />
          <p>Email:{user.email}</p>
        </div>
      }
    </div>
  );
}

export default App;
