import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./components/HomeScreen/Home";
import SingUp from "./components/SignUpScreen/SignUp";
import SingIn from "./components/SignInScreen/SignIn";
import Bookings from "./components/BookingsScreen/Bookings";
import TripPage from "./components/TripInfoScreen/TripPage";
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  function handleLoggedinClick() {
    setIsLoggedin(true);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout isLoggedin={isLoggedin} onLoggedOut={setIsLoggedin}/>}>
          <Route
            index
            element={isLoggedin ? <Home /> : <Navigate to="/sign-up" />}
          />
          <Route
            path="bookings"
            element={isLoggedin ? <Bookings /> : <Navigate to="/sign-up" />}
          />
          <Route path="sign-up" element={<SingUp onSubmit={setIsLoggedin} />} />
          <Route path="sign-in" element={<SingIn onSubmit={setIsLoggedin} />} />
          <Route path="trip/:tripId" element={<TripPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
