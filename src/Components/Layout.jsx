import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButton from "./Chat";
import ThemeToggle from "./ThemeToggle";
const Layout = () => {
    return (
        <>
            <Header /> 
            <ThemeToggle />
                <main>
                    <Outlet />
                </main>
            <FloatingButton />    
            <Footer />
        </>
    )
}
export default Layout