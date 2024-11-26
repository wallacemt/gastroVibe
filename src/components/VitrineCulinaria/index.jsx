import React from "react";
import { Navbar } from "../Navbar";
import { BannerDeDivulgacao } from "./BannerDivulgação";

const restaurants = [
    {
        name: "Abara da VOVO",
        images: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AdDdOWqYtfk3QuXyKeCucn-0KZHGoLqywSsOLCBblsTj71MmY6_tcqknz8XKR30Mgd4TLS98ebl6IPjqTkkx2aVlau6hVhf1cSZ1_lbA1L9BQ2KcT3j3aG36agFx430u_3EN2sROA54sl1mBetckMbzwp_jBHbnPPLkMnrm1vX-Ymv7TL-6C&key=AIzaSyBkz98IqbnFsakaYRZT1HGc7oFw27TBE7Q",
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AdDdOWqs4N4cDEZ77nYty4Ce1GUeq5DP5bPuhUpbIzxkq09001dSBwtyOCghHpNAzCn8ybPHKbNE0U8Li5YdizveEruTz6JqdW3VaxxX7FD6EkPLqYuYJB3wU5domzb88s1G40q4SBxQq44lYHnnfNSJAzHvfwYp9fm3ksKprWc61JIGPIjC&key=AIzaSyBkz98IqbnFsakaYRZT1HGc7oFw27TBE7Q",
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AdDdOWrJ5RKYnOaYjnRck3dX_wDB2sNRIILgnVZjfTQYvuOpQ6aGkxvz9Hnl30XuyNQRMMxv7TFyYPp8jejkuvbhNdkgdbhCqFPCHxOZUwLEjBxWEKsPXDVlEmPS6oJRhkg8dLbqkhyJeplLjozB_8GF7Ih69nUeRUq7IG-DsR0ZlJu7hdc4&key=AIzaSyBkz98IqbnFsakaYRZT1HGc7oFw27TBE7Q"
        ],
        description: "Deliciosa comida soteropolitana com pratos típicos de Salvador.",
        address: "Rua Exemplo, 123, Salvador - BA",
        googleMapsLink: "https://www.google.com/maps/place/Restaurante+Exemplo+1"
    },
    {
        name: "Abara da VOVO",
        images: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AdDdOWqYtfk3QuXyKeCucn-0KZHGoLqywSsOLCBblsTj71MmY6_tcqknz8XKR30Mgd4TLS98ebl6IPjqTkkx2aVlau6hVhf1cSZ1_lbA1L9BQ2KcT3j3aG36agFx430u_3EN2sROA54sl1mBetckMbzwp_jBHbnPPLkMnrm1vX-Ymv7TL-6C&key=AIzaSyBkz98IqbnFsakaYRZT1HGc7oFw27TBE7Q",
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AdDdOWqs4N4cDEZ77nYty4Ce1GUeq5DP5bPuhUpbIzxkq09001dSBwtyOCghHpNAzCn8ybPHKbNE0U8Li5YdizveEruTz6JqdW3VaxxX7FD6EkPLqYuYJB3wU5domzb88s1G40q4SBxQq44lYHnnfNSJAzHvfwYp9fm3ksKprWc61JIGPIjC&key=AIzaSyBkz98IqbnFsakaYRZT1HGc7oFw27TBE7Q",
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AdDdOWrJ5RKYnOaYjnRck3dX_wDB2sNRIILgnVZjfTQYvuOpQ6aGkxvz9Hnl30XuyNQRMMxv7TFyYPp8jejkuvbhNdkgdbhCqFPCHxOZUwLEjBxWEKsPXDVlEmPS6oJRhkg8dLbqkhyJeplLjozB_8GF7Ih69nUeRUq7IG-DsR0ZlJu7hdc4&key=AIzaSyBkz98IqbnFsakaYRZT1HGc7oFw27TBE7Q"
        ],
        description: "Deliciosa comida soteropolitana com pratos típicos de Salvador.",
        address: "Rua Exemplo, 123, Salvador - BA",
        googleMapsLink: "https://www.google.com/maps/place/Restaurante+Exemplo+1"
    },
];

export const VitrineCulinaria = () => {
    return (
        <>
            <Navbar /> 
            <div className="px-6 py-10">
                <h2 className="text-4xl font-semibold text-center mb-10 text-principal">Vitrine Culinária</h2>
                {restaurants.map((restaurant, index) => (
                    <BannerDeDivulgacao key={index} restaurant={restaurant} />
                ))}
            </div>
        </>
    );
};
