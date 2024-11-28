import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "./screens/Home";
import { Vitrine } from "./screens/Vitrine";
import { ReceitasScreen } from "./screens/Receitas";
import { Sobre } from "./screens/Sobre";

export const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vitrine" element={<Vitrine />} />
                <Route path="/receitas" element={<ReceitasScreen />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    );
};

