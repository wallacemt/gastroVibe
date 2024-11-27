import {useState, useEffect} from "react";
import { Navbar } from "../Navbar";
import { BannerReceitass } from "./BannerReceitas";
import { Loading } from "../Loading";
export const Receitas = () => {
    const [recipes, setRecipes] = useState([]);
    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchReceitas = async () => {
            try {
                const response = await fetch("/receitas.json");
                if(!response.ok) {
                    throw new Error("Erro ao carregar as receitas");
                }
                const data = await response.json();
                setRecipes(data);
            } catch (err) {
                console.log(err);
            }finally {
                setLoading(false);
            }
        }
        fetchReceitas();
    }, []);
    if (loading) {
        return <Loading text="Carregando receitas..." />;
    }
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
                    Receitas Típicas
                    <div className="w-1/2 mx-auto mt-4 border-t-4 border-destaque"></div>
                </h2>
            </div>

            <div className="px-6 py-10">
                <div className="flex flex-wrap justify-center gap-6">
                    {recipes.map((recipes) => (
                        <BannerReceitass
                            key={recipes.id}
                            recipe={recipes}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}