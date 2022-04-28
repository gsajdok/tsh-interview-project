import React from 'react';
import {Header} from "./Header";
import {Product} from "./Product";

const MOCKITEMS = [
        {
            "id": 1,
            "name": "Incredible Plastic Pizza",
            "description": "Molestiae iure eum voluptas culpa et ut quasi.",
            "rating": 2,
            "image": "https://picsum.photos/640/480?random=1074",
            "promo": true,
            "active": true
        },
        {
            "id": 2,
            "name": "Licensed Cotton Soap",
            "description": "Commodi repellat illo facilis.",
            "rating": 2,
            "image": "https://picsum.photos/640/480?random=5623",
            "promo": true,
            "active": false
        },
        {
            "id": 3,
            "name": "Tasty Rubber Car",
            "description": "Explicabo accusamus optio facilis nobis officiis sed nisi omnis quia.",
            "rating": 5,
            "image": "https://picsum.photos/640/480?random=2281",
            "promo": true,
            "active": true
        },
        {
            "id": 4,
            "name": "Generic Metal Shirt",
            "description": "Molestias atque repudiandae hic consequuntur voluptatem repellat magni.",
            "rating": 4,
            "image": "https://picsum.photos/640/480?random=1573",
            "promo": false,
            "active": false
        },
        {
            "id": 5,
            "name": "Fantastic Fresh Ball",
            "description": "Aliquam delectus sapiente est cumque odio veniam reiciendis voluptatem distinctio.",
            "rating": 1,
            "image": "https://picsum.photos/640/480?random=5147",
            "promo": true,
            "active": true
        },
        {
            "id": 6,
            "name": "Awesome Fresh Gloves",
            "description": "Ut dicta et minima.",
            "rating": 1,
            "image": "https://picsum.photos/640/480?random=7135",
            "promo": true,
            "active": false
        },
        {
            "id": 7,
            "name": "Unbranded Concrete Sausages",
            "description": "Voluptatibus maxime odit fugit quo qui maxime.",
            "rating": 1,
            "image": "https://picsum.photos/640/480?random=2664",
            "promo": true,
            "active": false
        },
        {
            "id": 8,
            "name": "Small Wooden Gloves",
            "description": "At facere non nisi autem.",
            "rating": 1,
            "image": "https://picsum.photos/640/480?random=3559",
            "promo": false,
            "active": true
        },
        {
            "id": 9,
            "name": "Practical Concrete Mouse",
            "description": "Nulla dolor et at cumque perferendis dignissimos omnis.",
            "rating": 3,
            "image": "https://picsum.photos/640/480?random=3772",
            "promo": false,
            "active": true
        },
        {
            "id": 10,
            "name": "Licensed Plastic Bike",
            "description": "Delectus asperiores debitis culpa.",
            "rating": 4,
            "image": "https://picsum.photos/640/480?random=8090",
            "promo": false,
            "active": false
        }
        ];

export const Products = () => {
  return (
    <>
        <Header/>
        <section className="products">
            <div className="products__wrapper">
                <div className="products__list">
                    {MOCKITEMS.map(mockitem => <Product item={mockitem}/>)}
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
};
