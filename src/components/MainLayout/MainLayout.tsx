import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface IMainLayoutProps {
  isLoggedin: boolean;
  onLoggedOut: (arg0: boolean) => void;
}

function MainLayout({isLoggedin, onLoggedOut}:IMainLayoutProps) {
  return (
    <>
      <Header isLoggedin={isLoggedin} setIsLoggedin={onLoggedOut} />
      <main>
        <h1 className="visually-hidden">Travel App</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default MainLayout;
