import React, {useEffect, useState} from 'react';
import {Header} from "./Header";
import {fetchData} from "../../utilities/api";
import {Products_list} from "./Products_list";

export const Products = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCheck, setActiveCheck] = useState(false);
    const [promoCheck, setPromoCheck] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    let parameters = {limit: 12, page: 1};
    //{search: "text", limit: 1, page: 1, promo: true, active: true}

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
            {(error || !isLoaded || products.length===0) ? <div>Loading...</div> : <Products_list products={products} setCurrentPage={setCurrentPage}/>}
        </>
    );

};
