import {ReactComponent as Cross} from '../../assets/icons/Cross.svg'

export const Modal = ({item, setShowModal}) => {
    const handleOnClick = () => {
        setShowModal(false);
        document.body.style.overflow = "auto";
    }

    return (
        <div className="modal">
            <div className="modal__wrapper">
                <div className="modal__window">
                    <div className="modal__close">
                        <button onClick={handleOnClick} className="modal__close__button"><Cross/></button>
                    </div>
                    <div className="modal__window__image">
                        <img src={item.image} alt={item.name} className=""/>
                    </div>
                    <div className="modal__window__text">
                        <div className="text__title"><h2>{item.name}</h2></div>
                        <div className="text__description"><p>{item.description}</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}