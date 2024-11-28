import React from "react";
import { Navbar } from "../Navbar";
import { FaWhatsapp } from "react-icons/fa";

export const ContatoComp = () => {
    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-gradient-to-b from-branco via-[#FFF8F2] to-[#FFEBD8] flex flex-col items-center pt-20 px-4 md:px-10">
                <div className="w-full max-w-7xl relative">
                    <img
                        src="/ct-fita.png"
                        alt="Salvador - Bahia"
                        className="w-full h-full object-cover max-h-96 rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00000036] to-transparent rounded-xl"></div>
                </div>

                <div className="w-full max-w-4xl text-center mt-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-destaque font-playfair">
                        Entre em Contato com o{" "}
                        <span className="text-principal">GastroVibe</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
                        Quer divulgar o seu restaurante e fazer parte do nosso
                        site? Entre em contato pelo WhatsApp e compartilhe a
                        história e os pratos incríveis da sua casa. Estamos
                        ansiosos para mostrar a cultura culinária da Bahia para
                        o mundo! <br />
                        <br />
                        Não perca a chance de se conectar com milhares de
                        amantes da culinária baiana.
                    </p>
                </div>

                <div className="w-full max-w-2xl mt-10 space-y-5 mb-10">
                    <div className="bg-claro p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
                        <div className="flex justify-center mb-4">
                            <img
                                src="/qr-contato.svg"
                                alt="QR Code WhatsApp"
                                className="w-40 h-40 object-cover rounded-md"
                            />
                        </div>
                        <h2 className="text-2xl font-semibold text-destaque mb-4 text-center">
                            QR Code para WhatsApp
                        </h2>
                        <p className="text-lg text-principal text-center">
                            Escaneie o código para enviar uma mensagem
                            diretamente para o nosso WhatsApp e iniciar sua
                            jornada gastronômica conosco.
                        </p>
                    </div>
                    <div className=" p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
                        <h2 className="text-2xl font-semibold text-destaque mb-4 text-center">
                            Entre em Contato
                        </h2>
                        <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg mt-4 w-full text-[1.2em]"
                        >
                            <FaWhatsapp className="mr-2" size={28} />
                            Entrar em Contato
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
