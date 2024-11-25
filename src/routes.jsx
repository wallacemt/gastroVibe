import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "./components/Home";
export const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}