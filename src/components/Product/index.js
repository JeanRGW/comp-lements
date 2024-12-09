import React from "react";
import FilledStar from "../Stars/FilledStar";
import EmptyStar from "../Stars/EmptyStar";

import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ image, name, starNumber, price, linkTo }) => (
    <div className="product">
        <div className="item-img-container">
            <img className="item-img" src={image} alt="Product"></img>
        </div>
        <h6>{name}</h6>
        <div>
            {Array.from({ length: 5 }, (_, index) =>
                index < starNumber ? (
                    <FilledStar key={index} />
                ) : (
                    <EmptyStar key={index} />
                )
            )}
        </div>
        <div className="price-container">
            <h5>R$ {price}</h5>
            <p>10% off</p>
        </div>
        <Link to={linkTo}>
            <div className="buy-container">COMPRAR</div>
        </Link>
    </div>
);

export default Product;
