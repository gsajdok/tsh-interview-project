import {Pagination} from "./Pagination";
import {Product} from "./Product";
import {Empty} from "./Empty";

export const Products_list = ({products, setCurrentPage}) => {

    return (
        <section className="products">
            <div className="products__wrapper">
                <div className="products__list">
                    {products.meta.totalItems===0 ? <Empty/> : products.items.map(item => <Product key={item.id} item={item}/>)}
                </div>
                <div className="products__pages">
                    <Pagination metaData={products.meta} setCurrentPage={setCurrentPage}/>
                </div>
            </div>
        </section>
    )
}