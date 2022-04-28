import React, {useEffect, useState} from 'react';
import {Header} from "./Header";
import {Product} from "./Product";
import {Empty} from "./Empty";

export const Products = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://join-tsh-api-staging.herokuapp.com/products?search=wawawa&limit=5&page=2")
            .then(res => res.json())
            .then(
                (data) => {
                    setLoaded(true);
                    setProducts(data);
                },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return (
            <>
                <Header/>
                <div>Error</div>
            </>
        )
    } else if (!isLoaded || products.length===0) {
        return (
            <>
                <Header/>
                <div>Loading</div>
            </>
        )
    } else {
        return (
            <>
                <Header/>
                <section className="products">
                    <div className="products__wrapper">
                        <div className="products__list">
                            {products.meta.totalItems===0 ? <Empty/> : products.items.map(item => <Product key={item.id} item={item}/>)}
                        </div>
                        <div className="products__pages">
                            <a href="">First</a>
                            <div className="products__pages__digits">
                                <a href="">1</a>
                                <a href="">2</a>
                                <a href="">3</a>
                                ...
                                <a href="">8</a>
                                <a href="">9</a>
                                <a href="">10</a>
                            </div>
                            <a href="">Last</a>
                        </div>
                    </div>
                </section>
            </>
        );
    }

};
