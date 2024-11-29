import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./screens/Home";
import { Vitrine } from "./screens/Vitrine";
import { ReceitasScreen } from "./screens/Receitas";
import { Sobre } from "./screens/Sobre";
import { Contato } from "./screens/Contato";

export const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/vitrine" element={<Vitrine />} />
                <Route path="/receitas" element={<ReceitasScreen />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
};


