import React from "react";
import "./Login.css";

const Login = () => (
    <div className="login-container">
        <form className="login-form">
            <h2 className="login-title">Entrar</h2>
            <input
                type="text"
                placeholder="CPF ou E-mail"
                className="login-input"
            />
            <input
                type="password"
                placeholder="Senha"
                className="login-input"
            />
            <button type="submit" className="login-button">
                Entrar
            </button>
            <div className="login-links">
                <a href="/forgot-password" className="login-link">
                    Esqueceu sua senha?
                </a>
                <a href="/register" className="login-link">
                    Criar uma conta
                </a>
            </div>
        </form>
    </div>
);

export default Login;
