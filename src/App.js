import './App.css';
import { Route, Navigate, Routes } from "react-router-dom";
import Home from './components/HomeScreen/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import SingUp from './components/SingUpScreen';
// import SingIn from './components/SingInScreen';
// import Bookings from './components/BookingsScreen';
// import TripInfoScreen from './components/TripInfoScreen';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/sing-up" element={<SingUp />} />
          <Route path="/sing-in" element={<SingIn />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/trip/:tripId" element={<TripInfoScreen />} />
           */}
           <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
