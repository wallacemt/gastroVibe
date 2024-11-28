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
            <div>
                <button
                    className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl w-full text-lg text-gray-50 bg-principal backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-destaque hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                    onClick={handleModalToggle}
                >
                    Fazer Agora
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 19"
                        className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    >
                        <path
                            className="fill-gray-800 group-hover:fill-gray-800"
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        />
                    </svg>
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
                            <i className="fas fa-seedling mr-2"></i>{" "}
                            Ingredientes
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
