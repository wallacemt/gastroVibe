import React from "react";

export const BannerDivulgacao = ({ imageUrl, restaurantName }) => {
    return (
        <div className="w-373px h-522px flex-shrink-0">
            <div className={`bg-[url(${imageUrl})] bg-cover w-full h-full flex items-center justify-center`}>
                <div className="text-center flex flex-col">
                    <h1 className="text-4xl font-bold text-white uppercase drop-shadow-[0_10px_3px_rgba(0,0,0,0.5)] mb-5 text-center">
                        {restaurantName}
                    </h1>
                    <button 
                        className="bg-[#e74c3c] text-white font-bold py-2 px-4 rounded hover:bg-[#812a21cc]"
                    >
                        Conhecer Agora
                    </button>
                </div>
            </div>
        </div>
    );
};

