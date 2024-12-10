import React from "react";
import Product from "../../components/Product";
import Biava1 from "./../Home/whey.png";

import "./Products.css";

const products = [
    {
        name: "Produto 1",
        image: Biava1,
        starNumber: 5,
        price: 200,
        linkTo: "/produto",
    },
    {
        name: "Produto 2",
        image: Biava1,
        starNumber: 4,
        price: 150,
        linkTo: "/produto2",
    },
    {
        name: "Produto 3",
        image: Biava1,
        starNumber: 3,
        price: 100,
        linkTo: "/produto3",
    },
    {
        name: "Produto 4",
        image: Biava1,
        starNumber: 3,
        price: 100,
        linkTo: "/produto3",
    },
    {
        name: "Produto 5",
        image: Biava1,
        starNumber: 3,
        price: 100,
        linkTo: "/produto3",
    },
    {
        name: "Produto 6",
        image: Biava1,
        starNumber: 3,
        price: 100,
        linkTo: "/produto3",
    },
    {
        name: "Produto 7",
        image: Biava1,
        starNumber: 3,
        price: 100,
        linkTo: "/produto3",
    },
    {
        name: "Produto 8",
        image: Biava1,
        starNumber: 3,
        price: 100,
        linkTo: "/produto3",
    },
    {
        name: "Produto 9",
        image: Biava1,
        starNumber: 3,
        price: 100,
        linkTo: "/produto3",
    },
    {
        name: "Produto 10",
        image: Biava1,
        starNumber: 3,
        price: 100,
        linkTo: "/produto3",
    },
];

const Products = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const [isCollapsed2, setIsCollapsed2] = React.useState(false);

    const toggleSection = () => setIsCollapsed(!isCollapsed);
    const toggleSection2 = () => setIsCollapsed2(!isCollapsed2);

    return (
        <div className="products-container">
            <aside>
                <h3>WHEY PROTEIN</h3>
                <div className="filters-container">
                    <h3>Filtros</h3>
                    <hr />
                    <section>
                        <h4
                            onClick={toggleSection}
                            className={isCollapsed ? "collapsed" : ""}
                        >
                            Valor
                        </h4>
                        {!isCollapsed && (
                            <ul>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Até R$50,00
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> De R$50,00 a
                                        R$75,00
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> De R$75,00 a
                                        R$100,00
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> De R$100,00 a
                                        R$150,00
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> A partir de
                                        R$200,00
                                    </label>
                                </li>
                            </ul>
                        )}
                        <hr />
                    </section>
                    <section>
                        <h4
                            onClick={toggleSection2}
                            className={isCollapsed2 ? "collapsed" : ""}
                        >
                            Filtro 2
                        </h4>
                        {!isCollapsed2 && (
                            <ul>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Seleção
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Seleção
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Seleção
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" /> Seleção
                                    </label>
                                </li>
                            </ul>
                        )}
                    </section>
                </div>
            </aside>

            {/* Lista de produtos */}
            <main>
                {products.map((product, index) => (
                    <Product
                        name={product.name}
                        image={product.image}
                        linkTo={"/produto"}
                        price={200}
                        starNumber={4}
                    />
                ))}
            </main>
        </div>
    );
};

export default Products;
