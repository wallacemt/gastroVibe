import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { BannerReceitass } from "./BannerReceitas";
import { Loading } from "../Loading";
import { ImSearch } from "react-icons/im";

export const Receitas = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const response = await fetch("/receitas.json");
        if (!response.ok) {
          throw new Error("Erro ao carregar as receitas");
        }
        const data = await response.json();
        setRecipes(data);
        setFilteredRecipes(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReceitas();
  }, []);

  if (loading) {
    return <Loading text="Carregando receitas..." />;
  }

  const handleButtonClick = () => {
    setIsSearching(true);
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRecipes(filtered);
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
          Receitas Típicas
          <div className="w-1/2 mx-auto mt-4 border-t-4 border-destaque"></div>
        </h2>
      </div>

      <div className="px-6 py-2">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            className="w-1/2 px-4 py-2 rounded-md border-2 border-destaque"
            placeholder="Pesquise por uma receita..."
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

        <div className="flex flex-wrap justify-center gap-6">
          {filteredRecipes.map((recipe) => (
            <BannerReceitass key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

