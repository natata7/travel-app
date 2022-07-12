import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./components/HomeScreen/Home";
import SingUp from "./components/SignUpScreen/SignUp";
import SingIn from "./components/SignInScreen/SignIn";
import Bookings from "./components/BookingsScreen/Bookings";
import TripPage from "./components/TripInfoScreen/TripPage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { IState } from './store/store';

function App() {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  function handleLoggedinClick(): void {
    setIsLoggedin(true);
  }

  const { user }:any = useSelector<IState>(state => ({
    user: state.profile.user
  }));
  const hasUser = Boolean(user);

  useEffect(() => {
    console.log('hasUser')
    console.log(hasUser)
    if(hasUser) setIsLoggedin(true);
  });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout isLoggedin={isLoggedin} onLoggedOut={setIsLoggedin} />
          }
        >
          <Route
            index
            element={isLoggedin ? <Home /> : <Navigate to="/sign-up" />}
          />
          <Route
            path="bookings"
            element={isLoggedin ? <Bookings /> : <Navigate to="/sign-up" />}
          />
          <Route
            path="trip/:tripId"
            element={isLoggedin ? <TripPage /> : <Navigate to="/sign-up" />}
          />
          <Route path="sign-up" element={<SingUp />} />
          <Route path="sign-in" element={<SingIn onSubmit={setIsLoggedin} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
