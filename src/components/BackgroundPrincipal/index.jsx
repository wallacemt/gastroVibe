import React from "react";
import { useNavigate } from "react-router-dom";

export const BackgroundPrincipal = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[url('./back.jpg')] bg-cover w-full h-screen flex items-center justify-center">
        <div className="text-center flex flex-col">
          <h1 className="text-4xl font-bold text-white uppercase drop-shadow-[0_10px_3px_rgba(0,0,0,0.5)] mb-5 text-center">
            GASTROVIBE
          </h1>

          <p className="text-1xl font-bold text-white text-center mb-5">
            Desfrute da melhor culinária
          </p>

          <button className="bg-[#e74c3c] text-white font-bold py-2 px-4 rounded hover:bg-[#812a21cc]"
          onClick={() => navigate("/home")}>
            Conhecer Agora
          </button>
        </div>
      </div>
    </>
  );
};
