import {ReactComponent as Bag} from '../../assets/icons/Item.svg';

export const Empty = () => {
    return (
        <div className="product product--empty">
            <div className="product__text product__text--centered">
                <Bag/>
                <div className="product__title">
                    Ooops... It's empty here
                </div>
                <div className="product__description">
                    There are no products on the list
                </div>
            </div>
        </div>
    )
}