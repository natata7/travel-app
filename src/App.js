import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import Home from "./components/HomeScreen/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingUp from "./components/SignUpScreen/SignUp";
import SingIn from "./components/SignInScreen/SignIn";
import Bookings from "./components/BookingsScreen/Bookings";
import TripPage from "./components/TripInfoScreen/TripPage";
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  console.log()
  function handleLoggedinClick() {
    setIsLoggedin(true);
  }

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedin} onLoggedOut={setIsLoggedin} />
      <Routes>
        <Route
          path="/"
          element={isLoggedin ? <Home /> : <Navigate to="/sign-up" />}
        />
        <Route
          path="bookings"
          element={isLoggedin ? <Bookings /> : <Navigate to="/sign-up" />}
        />
        <Route path="sign-up" element={<SingUp onSubmit={setIsLoggedin} />} />
        <Route path="sign-in" element={<SingIn onSubmit={setIsLoggedin} />} />
        <Route path="trip/:tripId" element={<TripPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
