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
        <div className="relative w-screen h-screen bg-[url('/back-home.jpg')] bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-45 blur-md"></div>
            
            <div className="relative z-10 flex items-center justify-center h-full text-center flex-col px-2 sm:px-8">
                <h1
                    className="text-4xl sm:text-6xl md:text-7xl font-playfair font-bold text-claro uppercase tracking-wide mb-6 drop-shadow-lg"
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
                    className="relative px-5 py-3 text-sm font-semibold uppercase tracking-widest border rounded-lg border-destaque bg-trasparent overflow-hidden shadow-none transition-all duration-200 ease-in hover: bg-destaque hover:shadow-[0_0_30px_5px_rgba(242,96,12,0.8)] hover:scale-110"
                    onClick={()=> navigate("/vitrine")}
                >
                    <span className="relative z-10 text-claro">Comece sua jornada</span>

                   <span className="absolute top-[7%] left-0 h-[86%] w-0 bg-branco opacity-0 transform -skew-x-12 transition-all duration-500 ease-linear hover:opacity-100 hover:w-full"></span>

                </button>
            </div>
        </div>
    );
};
