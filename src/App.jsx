import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './Firebase/Firebase.config';



const provider = new GoogleAuthProvider();

const auth =getAuth(app);
signInWithPopup(auth,provider);
function App() {
const handleGoogleSignIn=()=>{
  
}

  return (
    <div className="App">
      
      <h1>Firebase+Vite</h1>
      
      <button onClick={handleGoogleSignIn}>Google signIn</button>
    </div>
  )
}

export default App
