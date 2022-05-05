import {Pagination} from "./Pagination";
import {Product} from "./Product";
import {Empty} from "./Empty";

export const Products_list = ({products, setCurrentPage}) => {

    return (
        <>
            <div className="products__list">
                {products.meta.totalItems===0 ? <Empty/> : products.items.map(item => <Product key={item.id} item={item}/>)}
            </div>
            {products.meta.totalItems>0 &&
            <div className="products__pages">
                <Pagination metaData={products.meta} setCurrentPage={setCurrentPage}/>
            </div>}
        </>
    )
}