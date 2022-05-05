import React, {useEffect, useState} from 'react';
import {Header} from "./Header";
import {fetchData} from "../../utilities/api";
import {Products_list} from "./Products_list";
import {Loading} from "./Loading";

export const Products = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCheck, setActiveCheck] = useState(false);
    const [promoCheck, setPromoCheck] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    let parameters = {limit: 12, page: 1};

    useEffect(() => {
        fetchData(setLoaded, setProducts, setError, parameters);
    }, [])

    useEffect(() => {
        parameters = {...parameters, search: searchQuery, promo: promoCheck, active: activeCheck, page: currentPage};
        if(!promoCheck) { delete parameters["promo"] }
        if(!activeCheck) { delete parameters["active"] }
        if(searchQuery==="") { delete parameters["search"] }
        fetchData(setLoaded, setProducts, setError, parameters);
    }, [searchQuery, activeCheck, promoCheck, currentPage])

    return (
        <>
            <Header
                setSearchQuery={setSearchQuery}
                setActiveCheck={setActiveCheck}
                setPromoCheck={setPromoCheck}
                activeCheck={activeCheck}
                promoCheck={promoCheck}
                setCurrentPage={setCurrentPage}
            />
            <section className="products">
                <div className="products__wrapper">
                    {(error || !isLoaded || products.length===0) ? <Loading/> : <Products_list products={products} setCurrentPage={setCurrentPage}/>}
                </div>
            </section>
        </>
    );

};
