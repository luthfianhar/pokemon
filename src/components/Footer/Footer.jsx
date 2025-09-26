import React from "react";
import logo from "../../assets/pokemon.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 text-center">
            <img src={logo} alt="Logo" className="h-8 mx-auto mb-2" />
            <p>&copy; {new Date().getFullYear()} Pokemon App. All rights reserved.</p>
        </footer>
    );
};

export default Footer;