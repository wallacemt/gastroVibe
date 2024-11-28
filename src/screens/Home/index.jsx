import React from "react";
import { BannerHome } from "../../components/BannerHome";
import { Navbar } from "../../components/Navbar";
export const Home = () => {
    return (
        <>
            <div className="overflow-hidden">
                <Navbar/>
                <BannerHome/>
            </div>
        </>
    );
};

