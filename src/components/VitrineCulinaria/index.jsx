import React, { useState, useEffect } from "react";
import { BannerDeDivulgacao } from "./BannerDivulgação";
import { Loading } from "../Loading";
import { Navbar } from "../Navbar";
import { ImSearch } from "react-icons/im";

export const VitrineCulinaria = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch("/restaurantes.json");
                if (!response.ok) {
                    throw new Error(
                        `Erro ao carregar os dados: ${response.statusText}`
                    );
                }
                const data = await response.json();
                setRestaurants(data);
                setFilteredRestaurants(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchRestaurants();
    }, []);

    if (loading) {
        return <Loading text="Carregando restaurantes..." />;
    }

    if (error) {
        return (
            <div className="text-center py-10 text-vermelho">Erro Ao carregar os restaurantes.</div>
        );
    }

    

    const handleButtonClick = () => {
        setIsSearching(true);
        const filtered = restaurants.filter(
            (restaurant) =>
                restaurant.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredRestaurants(filtered);
        setIsSearching(false);
    };

    return (
        <>
            <Navbar />
            <div className="py-5 mt-5">
                <h2 className="text-6xl font-semibold text-center text-principal mt-24 font-playfair relative">
                    <span className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-destaque text-3xl">
                        &#9733;
                    </span>
                    <span className="block text-xl font-light text-cinzaEscuro tracking-wide uppercase mb-2">
                        Explore os sabores
                    </span>
                    Vitrine Culinária
                    <div className="w-1/2 mx-auto mt-4 border-t-4 border-destaque"></div>
                </h2>
            </div>

            <div className="px-6 py-2">
                <div className="flex justify-center">
                    <input
                        type="text"
                        className="w-1/2 px-4 py-2 rounded-md border-2 border-destaque"
                        placeholder="Pesquise por um restaurante"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className="ml-2 px-4 py-2 rounded-md border-2 border-destaque hover:bg-destaque hover:text-branco"
                        onClick={handleButtonClick}
                    >
                        {isSearching ? <ImSearch className="animate-spin" /> : <ImSearch />}
                    </button>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {filteredRestaurants.map((restaurant, index) => (
                        <BannerDeDivulgacao
                            key={index}
                            restaurant={restaurant}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

