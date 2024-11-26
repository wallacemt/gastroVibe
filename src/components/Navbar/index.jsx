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
        <header className="fixed top-0 left-0 w-full bg-branco shadow-md z-50">
            <div className="flex items-center justify-between px-6 py-4">
                <div
                    className="flex items-center space-x-3 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <div
                        className="bg-[url('/logo.png')] bg-no-repeat bg-contain w-[60px] h-[60px] transition-all duration-500 hover:scale-150"
                        aria-label="GastroVibe logo"
                    ></div>

                    <p className="text-2xl font-playfair font-bold tracking-wider text-destaque">
                        GastroVibe
                    </p>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-grow justify-end space-x-12">
                    <button
                        onClick={() => navigate("/sobre")}
                        className="text-principal font-semibold text-lg hover:text-destaque transition-all duration-300 hover:underline decoration-destaque decoration-2 underline-offset-4"
                    >
                        Sobre
                    </button>
                    <button
                        onClick={() => navigate("/vitrine")}
                        className="text-principal font-semibold text-lg hover:text-destaque transition-all duration-300 hover:underline decoration-destaque decoration-2 underline-offset-4"
                    >
                        Vitrine Culinária
                    </button>
                    <button
                        onClick={() => navigate("/receitas")}
                        className="text-principal font-semibold text-lg hover:text-destaque transition-all duration-300 hover:underline decoration-destaque decoration-2 underline-offset-4"
                    >
                        Receitas
                    </button>
                    <button
                        onClick={() => navigate("/contato")}
                        className="text-principal font-semibold text-lg hover:text-destaque transition-all duration-300 hover:underline decoration-destaque decoration-2 underline-offset-4"
                    >
                        Contato
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Menu
                        right
                        isOpen={isMenuOpen}
                        onStateChange={handleMenuStateChange}
                        burgerButtonClassName="text-branco"
                        menuClassName="bg-dark bg-opacity-50"
                        overlayClassName="bg-dark bg-opacity-50"
                        styles={{
                            bmBurgerButton: {
                                position: "absolute",
                                zIndex: "9999",
                                width: "30px",
                                height: "24px",
                                right: "15px",
                                top: "10px",
                            },
                            bmBurgerBars: {
                                background: "#AD343E",
                            },
                            bmMenuWrap: {
                                position: "fixed",
                                height: "100%",
                                top: "0",
                                right: "0",
                            },
                            bmMenu: {
                                background: "#182226",
                                padding: "2em 1.5em",
                                fontSize: "1.2em",
                                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                            },
                            bmItemList: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                            },
                            bmItem: {
                                color: "#fff",
                                textAlign: "center",
                                textDecoration: "none",
                                fontSize: "1.5rem",
                                padding: "0.5rem 0",
                                fontWeight: "bold",
                                borderRadius: "0.25rem",
                                transition: "color 0.3s, background 0.3s",
                                borderBottom: "2px solid #AD343E",
                            },
                            bmOverlay: {
                                background: "rgba(0, 0, 0, 0.5)",
                            },
                        }}
                    >
                        <a
                            className="menu-item hover:bg-destaque hover:text-branco"
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate("/sobre");
                            }}
                        >
                            Sobre
                        </a>
                        <a
                            className="menu-item hover:bg-destaque hover:text-branco"
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate("/vitrine");
                            }}
                        >
                            Vitrine Culinária
                        </a>
                        <a
                            className="menu-item hover:bg-destaque hover:text-branco"
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate("/receitas");
                            }}
                        >
                            Receitas
                        </a>
                        <a
                            className="menu-item hover:bg-destaque hover:text-branco"
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
