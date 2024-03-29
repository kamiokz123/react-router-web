import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <>
        <Header />
        {
            <Outlet />
        }
        <Footer />
        </>
    )
}

export default RootLayout
