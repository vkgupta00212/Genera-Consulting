import React, { useState } from "react";
import Sidenav from "./SideNav";
import { SideNavProvider } from "../hooks/useSideNav";

const Layout = ({ children }) => {
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);
    const [intialRenderForAnimation, setInitialRenderForAnimation] = useState("");

    const toggleSidenav = () => {
        setIsSidenavOpen(true);
        setInitialRenderForAnimation("open");
    };

    const sidenavContext = {
        toggleSidenav,
        isSidenavOpen,
        setIsSidenavOpen,
        intialRenderForAnimation,
        setInitialRenderForAnimation,
    };

    return (
        <SideNavProvider value={sidenavContext}>
            <div className="relative">
                <Sidenav
                    isSidenavOpen={isSidenavOpen}
                    setIsSidenavOpen={setIsSidenavOpen}
                    intialRenderForAnimation={intialRenderForAnimation}
                    setInitialRenderForAnimation={setInitialRenderForAnimation}
                />
                {children}
            </div>
        </SideNavProvider>
    );
};

export default Layout; 