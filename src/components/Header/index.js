import "./Header.css";
import Logo from "./logo.webp";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <div className="container-fluid d-flex align-items-center justify-content-between">
            <div className="logo-container">
                <Link to="/">
                    <img src={Logo} className="logo" alt="Logo" />
                </Link>
            </div>

            <div className="categories">
                <Link to="/produtos">WHEY PROTEIN</Link>
                <Link to="/pretreinos">PRÉ-TREINO</Link>
                <Link to="/roupas">ROUPAS</Link>
                <Link to="/lancamentos">LANÇAMENTOS</Link>
            </div>

            <div className="user-controls">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Pesquisa"
                />
                <a href="/sacola">
                    <div className="bag-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="28"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z" />
                        </svg>
                        <span className="bag-count">3</span>
                    </div>
                </a>
                <a href="/login">
                    <img src={Logo} className="user-image" alt="User" />
                </a>
            </div>
        </div>
    </header>
);

export default Header;
