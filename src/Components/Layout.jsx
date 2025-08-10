import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButton from "./Chat";

const Layout = () => {
    return (
        <>
            <Header /> 
                <main>
                    <Outlet />
                </main>
            <FloatingButton />    
            <Footer />
        </>
    )
}
export default Layout