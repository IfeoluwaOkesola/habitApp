import Nav from "../components/mainlayout/Nav";
import Sidebar from "../components/mainlayout/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-full">
            <Nav />
            <div className="flex w-full">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;