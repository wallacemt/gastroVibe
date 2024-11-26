import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

export const BannerDeDivulgacao = ({ restaurant }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative w-full max-w-[600px] mb-10  rounded-lg">
            <h2 className="text-3xl font-bold text-principal text-center mb-4 border-b-2 border-y-destaque">
                {restaurant.name}
            </h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => (
                        `<span class="${className} swiper-pagination-bullet ">
                            <span class="text-destaque">&#8226;</span>
                        </span>`
                    ),
                }}
                modules={[Pagination]}
                className="mb-2"
            >
                {restaurant.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Imagem do restaurante ${restaurant.name}`}
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="bg-branco p-4 rounded-lg shadow-md mb-6 hover:border-2  border-cinzaEscuro">
                <button
                    onClick={toggleDropdown}
                    className="w-full text-lg font-semibold text-principal text-left  py-2"
                >
                    {isOpen ? "Mostrar Menos" : "Ver Mais Informações"}
                    {isOpen ? (
                        <FiChevronDown className="inline-block ml-2" />
                    ) : (
                        <FiChevronRight className="inline-block ml-2" />
                    )}
                </button>
                {isOpen && (
                    <div>
                        <div className="bg-gray-50 p-4  rounded-lg text-gray-800">
                            <h3 className="font-semibold text-xl mb-2">
                                Descrição
                            </h3>
                            <p className="text-gray-600">
                                {restaurant.description}
                            </p>

                            <h3 className="font-semibold text-xl mt-4 mb-2">
                                Endereço
                            </h3>
                            <p className="text-gray-600">
                                {restaurant.address}
                            </p>

                            <h3 className="font-semibold text-xl mt-4 mb-2">
                                Horários
                            </h3>
                            <p className="text-gray-600">
                                {restaurant.opening_hours}
                            </p>

                            <h3 className="font-semibold text-xl mt-4 mb-2">
                                Contato
                            </h3>
                            <p className="text-gray-600">{restaurant.phone}</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="text-center">
                <a
                    href={restaurant.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-destaque text-white py-3 px-8 font-bold hover:bg-[#414536] transition-colors duration-300 flex items-center justify-center space-x-2 rounded"
                >
                    <FaMapMarkerAlt className="text-xl" />
                    <span>Conhecer Agora</span>
                </a>
            </div>
        </div>
    );
};
