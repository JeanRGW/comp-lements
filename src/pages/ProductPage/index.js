import React from "react";
import "./ProductPage.css";

import FilledStar from "./../../components/Stars/FilledStar";
import CaraForte from "./caraforte.webp";
import Texugo1 from "./texugo1.jpg";
import Texugo2 from "./texugo2.jpg";
import Texugo3 from "./texugo3.webp";

const ProductPage = () => (
    <div className="product-container">
        <div className="product-image">
            <img
                className="principal-image"
                src={CaraForte}
                alt="Cara forte tomando whey de texugo"
            ></img>
            <div className="thumbnail-container">
                <img className="thumbnail" src={Texugo1} alt="Texugo"></img>
                <img className="thumbnail" src={Texugo2} alt="Texugo"></img>
                <img className="thumbnail" src={Texugo3} alt="Texugo"></img>
            </div>
        </div>

        <div className="product-info">
            <h1 className="product-title">Whey com Leite de Texugo</h1>
            <div className="product-price">
                R$ <span>200</span>
            </div>
            <p className="product-description">
                Chegou o revolucionário **Whey Leite de Texugo**, o suplemento
                que vai dar um “up” no seu treino… e na sua vida! Prepare-se
                para sentir o poder que só o leite de texugo pode oferecer. Diga
                adeus aos shakes sem graça, e olá ao boost energético que vai
                deixar seu corpo tão forte quanto o animal mais destemido do
                reino animal!
            </p>
            <a href="/infoProduto" className="nutritional-link">
                Informação Nutricional (ou talvez não)
            </a>

            <div className="product-actions">
                <div className="quantity">
                    <label>QTD</label>
                    <input type="number" min="1" defaultValue="1" />
                </div>
                <button className="add-to-cart-button">
                    Adicionar à sacola
                </button>
            </div>

            <div className="product-review">
                <div className="review-top">
                    <h3>João A. B.</h3>
                    <div className="review-stars">
                        <FilledStar />
                        <FilledStar />
                        <FilledStar />
                        <FilledStar />
                        <FilledStar />
                    </div>
                </div>

                <p>
                    "Eu nunca pensei que um suplemento pudesse mudar tanto a
                    minha vida. Desde que comecei a usar o Whey de Leite de
                    Texugo, eu me sinto como se tivesse acordado do coma e me
                    transformado em um super-herói. No primeiro dia, consegui
                    levantar um carro, mas logo fui parar no hospital com a
                    sensação de que meu estômago estava tentando se rebelar.
                    Mesmo assim, continuei. Agora, sinto uma energia que nunca
                    experimentei antes... até a última gota do produto sair. Só
                    não conte para minha nutricionista."
                </p>
            </div>
        </div>
    </div>
);

export default ProductPage;
