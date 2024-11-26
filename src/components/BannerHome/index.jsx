import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
export const BannerHome = () => {
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);

    return (
        <div className="relative w-full h-screen bg-[url('/back-home.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-45 blur-md"></div>
            
            <div className="relative z-10 flex items-center justify-center h-full text-center flex-col px-2 sm:px-8">
                <h1
                    className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold text-claro uppercase tracking-wide mb-6 drop-shadow-lg"
                    data-aos="fade-up" 
                >
                    Explore o melhor da <span className="text-destaque">gastronomia</span> soteropolitana
                </h1>

                <p
                    className="text-lg sm:text-xl font-semibold text-[#cccccc] mb-6 sm:mb-8 drop-shadow-md"
                    data-aos="fade-up" 
                    data-aos-delay="200"
                >
                    Conectando você às melhores experiências gastronômicas de Salvador
                </p>

                <button
                    className="bg-destaque text-claro font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#812a21cc] transition-all duration-300 ease-in-out transform hover:scale-110"
                    onClick={()=> navigate("/vitrine")}
                >
                    Comece sua jornada
                </button>
            </div>
        </div>
    );
};
