import React from "react";
import "./Register.css";

const Register = () => (
    <div className="register-container">
        <form className="register-form">
            <h2 className="register-title">Cadastre-se</h2>
            <div className="register-row">
                <input
                    type="text"
                    placeholder="Primeiro Nome"
                    className="register-input"
                />
                <input
                    type="text"
                    placeholder="Segundo Nome"
                    className="register-input"
                />
            </div>
            <div className="register-row">
                <input
                    type="date"
                    placeholder="Data de Nascimento"
                    className="register-input"
                />
                <input
                    type="text"
                    placeholder="CPF"
                    className="register-input"
                />
            </div>
            <input
                type="email"
                placeholder="E-mail"
                className="register-input"
            />
            <input
                type="text"
                placeholder="Telefone"
                className="register-input"
            />
            <input
                type="password"
                placeholder="Senha"
                className="register-input"
            />
            <input
                type="password"
                placeholder="Confirmar Senha"
                className="register-input"
            />
            <button type="submit" className="register-button">
                Registrar
            </button>
            <p className="register-login-text">
                Já possui cadastro?{" "}
                <a href="/login" className="register-login-link">
                    Faça login
                </a>
            </p>
        </form>
    </div>
);

export default Register;
