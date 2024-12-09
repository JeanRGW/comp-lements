import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="notfound-container">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-message">
                Oops! A página que você está procurando não foi encontrada.
            </p>
            <button className="notfound-button" onClick={() => navigate("/")}>
                Voltar para Home
            </button>
        </div>
    );
};

export default NotFound;
