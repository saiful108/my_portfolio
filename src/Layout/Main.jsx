import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Home/footer/Footer";




const Main = () => {
    return (
        <div>
        <Navbar></Navbar>
            <Outlet></Outlet>#
            <Footer></Footer>
           
           
        </div>
    );
};

export default Main;