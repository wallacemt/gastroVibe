import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuStateChange = (state) => {
        setIsMenuOpen(state.isOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="flex items-center justify-between p-5">
                {/* Logo */}
                <div
                    className="bg-[url('./logo.png')] bg-no-repeat bg-contain w-[100px] h-[100px] cursor-pointer"
                    onClick={() => navigate("/")}
                ></div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <button onClick={() => navigate("/sobre")} className="text-gray-700 hover:text-orange-500">
                        Sobre
                    </button>
                    <button onClick={() => navigate("/vitrine")} className="text-gray-700 hover:text-orange-500">
                        Vitrine Culinária
                    </button>
                    <button onClick={() => navigate("/contato")} className="text-gray-700 hover:text-orange-500">
                        Contato
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Menu
                        right
                        isOpen={isMenuOpen}
                        onStateChange={handleMenuStateChange}
                        burgerButtonClassName="cursor-pointer"
                        menuClassName="bg-white"
                        overlayClassName="bg-black bg-opacity-50"
                    >
                        <a
                            className="menu-item"
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate("/sobre");
                            }}
                        >
                            Sobre
                        </a>
                        <a
                            className="menu-item"
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate("/vitrine");
                            }}
                        >
                            Vitrine Culinária
                        </a>
                        <a
                            className="menu-item"
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate("/contato");
                            }}
                        >
                            Contato
                        </a>
                    </Menu>
                </div>
            </div>
        </header>
    );
};
