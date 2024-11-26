import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css"; 
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa"; 

export const BannerDeDivulgacao = ({ restaurant }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative w-[600px] mb-10">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => (
                        `<span class="${className} swiper-pagination-bullet">
                            <span class="text-white">&#8226;</span>
                        </span>`
                    ),
                }}
                modules={[Pagination]} 
                className="mb-6 border-2 border-destaque rounded-lg overflow-hidden"
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
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <button
                    onClick={toggleDropdown}
                    className="w-full text-lg font-semibold text-principal text-left border-b-2 border-principal py-2"
                >
                    {isOpen ? "Mostrar Menos" : "Ver Mais Informações"}
                </button>
                {isOpen && (
                    <div className="mt-4">
                        <p className="text-sm text-gray-700">{restaurant.description}</p>
                        <p className="text-sm text-gray-700 mt-2">Endereço: {restaurant.address}</p>
                    </div>
                )}
            </div>
            <div className="text-center">
                <a
                    href={restaurant.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-destaque text-white py-3 px-8 rounded-lg font-bold hover:bg-[#812a21cc] transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                    <FaMapMarkerAlt className="text-xl" />
                    <span>Conhecer Agora</span>
                </a>
            </div>
        </div>
    );
};
