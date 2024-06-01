import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";


const MainLayout = () => {
    const location = useLocation();
    console.log(location);
    useEffect(()=> {
        if(location?.pathname === '/') {
            document.title = `Home`
        }else {
            document.title = `${location.pathname.replace('/', '')}`
        }
        if(location.state) {
            document.title = `${location.state}`
        }
    }, [location?.pathname, location?.state]);
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};


MainLayout.propTypes = {

};


export default MainLayout;
