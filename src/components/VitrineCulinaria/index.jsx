import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { BannerDeDivulgacao } from "./BannerDivulgação";
import { Loading } from "../Loading";

export const VitrineCulinaria = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            <div className="text-center py-10 text-vermelho">Erro: {error}</div>
        );
    }

    return (
        <>
            <Navbar />

            <div className="py-5">
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

            <div className="px-6 py-10">
                <div className="flex flex-wrap justify-center gap-6">
                    {restaurants.map((restaurant, index) => (
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
