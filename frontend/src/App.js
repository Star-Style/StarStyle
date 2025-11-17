import { useState, useEffect } from "react";
import { auth } from "./config/firebase";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Quiz from "./Quiz";
import Browse from "./Browse";
import Profile from "./Profile";
import { onAuthStateChanged } from "firebase/auth";
import Topbar from "./components/Topbar";
import HomePage from "./Homepage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(function () {
    function handleUser(firebaseUser) {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    }

    var listener = onAuthStateChanged(auth, handleUser);
    return function () {
      listener();
    };
  }, []);

  function getUsername() {
    if (!user) {
      return "";
    }
    return user.email.split("@")[0];
  }

  return (
    <BrowserRouter>
      <Topbar user={user} getUsername={getUsername} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* references:
www.w3schools.com/react/react_router.asp
dev.to/dchowitz/react-firebase-a-simple-context-based-authentication-provider-1ool
josecarrillo.me/creating-an-authentication-context-with-usecontext-in-react/
*/
