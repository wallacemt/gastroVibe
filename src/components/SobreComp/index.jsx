import React from "react";
import { Navbar } from "../Navbar";

export const SobreComp = () => {
    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-gradient-to-b from-branco via-[#FFF8F2] to-[#FFEBD8] flex flex-col items-center pt-20 px-4 md:px-10">
                <div className="w-full max-w-7xl relative">
                    <img
                        src="/ab-salvador.jpg"
                        alt="Salvador - Bahia"
                        className="w-full h-full object-cover max-h-96 rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00000036] to-transparent rounded-xl"></div>
                </div>

                <div className="w-full max-w-4xl text-center mt-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-destaque font-playfair">
                        Bem-vindo(a) ao{" "}
                        <span className="text-principal">GastroVibe</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
                        No{" "}
                        <span className="font-semibold text-destaque">
                            GastroVibe
                        </span>
                        , celebramos a rica e vibrante gastronomia da Bahia, um
                        estado onde cada prato conta uma história única. Não se
                        trata apenas dos sabores irresistíveis, mas também dos
                        aromas envolventes, das cores vibrantes e das tradições
                        que tornam a culinária local um verdadeiro patrimônio
                        cultural.
                        <br />
                        <br />
                        Aqui, nosso foco é trazer à tona os lugares e sabores
                        que muitas vezes ficam fora do radar, mas que são
                        verdadeiros tesouros gastronômicos e culturais de
                        Salvador. Queremos que você se sinta em casa ao explorar
                        essas delícias, como se estivesse descobrindo o segredo
                        de um baiano experiente, que compartilha com carinho
                        suas receitas, histórias e memórias de infância.
                        <br />
                        <br />
                        Vamos juntos explorar as combinações que fazem da Bahia
                        uma das regiões mais ricas e diversas quando se trata de
                        sabores e cultura. De receitas que atravessaram gerações
                        até novas interpretações dos clássicos, você encontrará
                        um pedacinho da Bahia em cada refeição.
                    </p>
                </div>

                <div className="w-full max-w-6xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
                        <img
                            src="/ab-acar.png"
                            alt="Acarajé"
                            className="w-full h-50 object-cover rounded-md mb-2"
                        />
                        <h2 className="text-xl font-semibold text-destaque mb-2">
                            Acarajé
                        </h2>
                        <p className="text-gray-600">
                            O acarajé é um dos símbolos da culinária baiana,
                            carregado de tradição e sabor. Descubra os melhores
                            lugares para experimentar essa iguaria.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
                        <img
                            src="/ab-coca.png"
                            alt="Doces baianos"
                            className="w-full h-50 object-cover rounded-md mb-2"
                        />
                        <h2 className="text-xl font-semibold text-destaque mb-2">
                            Doces Típicos
                        </h2>
                        <p className="text-gray-600">
                            Seja um bolo de rolo ou cocada, os doces baianos
                            trazem um gostinho especial da Bahia em cada
                            mordida.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition">
                        <img
                            src="/ab-baiana.png"
                            alt="Baianas de Acarajé"
                            className="w-full h-50 object-cover rounded-md mb-2"
                        />
                        <h2 className="text-xl font-semibold text-destaque mb-2">
                            Tradição e Cultura
                        </h2>
                        <p className="text-gray-600">
                            Mais do que comida, a culinária baiana é uma
                            expressão cultural repleta de história e
                            religiosidade.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
