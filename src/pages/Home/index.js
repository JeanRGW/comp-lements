import React from "react";
import Whey from "./whey.png";
import WheyP1 from "./wheyp1.webp";
import WheyP2 from "./wheyp2.webp";
import WheyP3 from "./wheyp3.webp";
import Product from "./../../components/Product";

import "./Home.css";
import { Carousel } from "react-bootstrap";

const Home = () => (
    <div>
        <Carousel id="homeCarousel" indicators={false}>
            <Carousel.Item>
                <img className="d-block w-100" src={WheyP1} alt="Biava 1" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={WheyP2} alt="Biava 2" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={WheyP3} alt="Biava 3" />
            </Carousel.Item>
        </Carousel>

        <div className="features-container">
            <div className="features-item">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="feature-icon"
                >
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>
                <div>
                    <h5>FRETE GRÁTIS</h5>
                    Em compras a partir de R$99
                </div>
            </div>
            <div className="features-item">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                    className="feature-icon"
                >
                    <path d="M40-200v-560h80v560zm120 0v-560h80v560zm120 0v-560h40v560zm120 0v-560h80v560zm120 0v-560h120v560zm160 0v-560h40v560zm120 0v-560h120v560z" />
                </svg>
                <div>
                    <h5>10% DE DESCONTO</h5>
                    Para pagamentos via pix ou boleto
                </div>
            </div>
            <div className="features-item">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="feature-icon"
                >
                    <path
                        d="M2.25 8.25H21.75M2.25 9H21.75M5.25 14.25H11.25M5.25 16.5H8.25M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <div>
                    <h5>ATÉ 6X SEM JUROS</h5>
                    Nas bandeiras MasterCard e Visa
                </div>
            </div>
            <div className="features-item">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="feature-icon"
                    fill="currentColor"
                >
                    <path d="m20.69,12c0,4.825-3.925,8.75-8.75,8.75-4.409,0-8.143-3.292-8.684-7.657-.051-.412.241-.786.652-.837.412-.05.786.24.836.652.449,3.616,3.542,6.342,7.196,6.342,3.998,0,7.25-3.252,7.25-7.25s-3.252-7.25-7.25-7.25c-1.653,0-3.219.553-4.48,1.55h.944c.414,0,.75.336.75.75s-.336.75-.75.75h-2.828c-.414,0-.75-.336-.75-.75v-2.829c0-.414.336-.75.75-.75s.75.336.75.75v1.079c1.557-1.313,3.526-2.05,5.614-2.05,4.825,0,8.75,3.925,8.75,8.75Zm-8.69-4.75c-.414,0-.75.336-.75.75v.277c-1.197.135-2.116,1.2-1.988,2.458.119,1.171,1.194,2.015,2.371,2.015h.867c.414,0,.75.337.75.75s-.336.75-.75.75h-1.749c-.414,0-.75.336-.75.75s.336.75.75.75h.499v.25c0,.414.336.75.75.75s.75-.336.75-.75v-.284c1.018-.16,1.882-.939,1.988-1.981.137-1.346-.92-2.485-2.238-2.485h-1c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h1.754c.414,0,.75-.336.75-.75s-.336-.75-.75-.75h-.504v-.25c0-.414-.336-.75-.75-.75Z"></path>
                </svg>

                <div>
                    <h5>DINHEIRO DE VOLTA</h5>
                    Cashback em todas as compras
                </div>
            </div>
        </div>

        <div className="destaques-container">
            <h2>Destaques</h2>
            <div className="destaques">
                <Product
                    name="Protein Fusion 900g - Espartanos"
                    image={Whey}
                    starNumber={5}
                    price={200}
                    linkTo={"/produto"}
                ></Product>
                <Product
                    name="Protein Fusion 900g - Espartanos"
                    image={Whey}
                    starNumber={5}
                    price={200}
                    linkTo={"/produto"}
                ></Product>
                <Product
                    name="Protein Fusion 900g - Espartanos"
                    image={Whey}
                    starNumber={5}
                    price={200}
                    linkTo={"/produto"}
                ></Product>
                <Product
                    name="Protein Fusion 900g - Espartanos"
                    image={Whey}
                    starNumber={5}
                    price={200}
                    linkTo={"/produto"}
                ></Product>
                <Product
                    name="Protein Fusion 900g - Espartanos"
                    image={Whey}
                    starNumber={5}
                    price={200}
                    linkTo={"/produto"}
                ></Product>
            </div>
        </div>
    </div>
);

export default Home;
