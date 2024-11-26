import React from "react";
import { WaveSpinner as Spinner } from "react-spinners-kit";

export const Loading = ({ size = 50, color = "#AD343E", text = "Carregando..." }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Spinner size={size} color={color} />
            {text && <p className="text-lg font-medium text-principal mt-4">{text}</p>}
        </div>
    );
};
