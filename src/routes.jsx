import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "./components/Home";
import { VitrineCulinaria } from "./components/VitrineCulinaria";
export const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vitrine" element={<VitrineCulinaria/>}/>
            </Routes>
        </BrowserRouter>
    )
}