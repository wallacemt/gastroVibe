import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export const BannerReceitass = ({ recipe }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <div className="relative w-full max-w-[600px] mb-10 rounded-lg">
            <h2 className="text-3xl font-bold font-cormorant text-principal text-center mb-4 border-b-2 border-y-destaque">
                {recipe.name}
            </h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) =>
                        `<span class="${className} swiper-pagination-bullet">
                            <span class="text-destaque">&#8226;</span>
                        </span>`,
                }}
                modules={[Pagination]}
                className="mb-2"
            >
                {recipe.images.map((url, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={url}
                            alt={`Imagem da receita ${recipe.name}`}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="bg-branco p-4 rounded-lg shadow-md flex justify-center hover:border-2 border-cinzaEscuro">
                <button
                    onClick={handleModalToggle}
                    className="bg-principal text-branco py-2 px-4 rounded-lg hover:bg-destaque transition duration-300"
                >
                    Fazer agora
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-auto">
                    <div className="bg-branco w-full h-full max-w-[1000px] max-h-[90%] p-8 rounded-lg shadow-lg relative overflow-auto">
                        <button
                            onClick={handleModalToggle}
                            className="absolute top-4 right-4 text-principal text-5xl font-bold hover:text-destaque transition duration-300"
                        >
                            <i className="fas fa-circle-xmark"></i>
                        </button>

                        <h2 className="text-3xl font-bold font-serif text-principal mb-6">
                            {recipe.name}
                        </h2>

                        {recipe.video && (
                            <div className="mb-6">
                                <iframe
                                    width="100%"
                                    height="400px"
                                    src={recipe.video}
                                    title={`Vídeo de ${recipe.name}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg shadow-md"
                                ></iframe>
                            </div>
                        )}

                        <h3 className="text-2xl font-semibold mb-4 flex items-center">
                            <i className="fas fa-info-circle mr-2"></i>{" "}
                            Descrição
                        </h3>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            {recipe.description}
                        </p>
                        
                        <h3 className="text-2xl font-semibold mb-4 flex items-center">
                            <i className="fas fa-seedling mr-2"></i> Ingredientes
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-6">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="mb-2">
                                    {ingredient}
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-semibold mb-4 flex items-center">
                            <i className="fas fa-utensils mr-2"></i> Passo a
                            passo
                        </h3>
                        <ul className="list-decimal list-inside text-gray-700 text-lg leading-relaxed">
                            {recipe.method_of_preparation
                                .split(".")
                                .map((step, index) => (
                                    <li key={index} className="mb-3">
                                        {step.trim()}.
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};
