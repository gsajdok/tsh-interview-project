import {ReactComponent as Cross} from '../../assets/icons/Cross.svg'
import {useEffect, useRef} from "react";

function onClickOutside(ref, callback) {
    useEffect(() => {
        function handleClickOutside(e) {
            if(ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
}

export const Modal = ({item, setShowModal}) => {
    const ref = useRef(null);
    const handleOnClick = () => {
        setShowModal(false);
        document.body.style.overflow = "auto";
    }
    onClickOutside(ref, handleOnClick);

    return (
        <div className="modal">
            <div className="modal__wrapper">
                <div className="modal__window" ref={ref}>
                    <div className="modal__close">
                        <button data-testid="modalCloseButton" onClick={handleOnClick} className="modal__close__button"><Cross/></button>
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