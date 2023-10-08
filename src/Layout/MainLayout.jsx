import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import OurClients from "../Components/OurClients/OurClients";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;