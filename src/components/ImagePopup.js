import React from 'react';

function ImagePopup(props) {
    console.log(props.card.link)
    return (
        <div className={`popup popup_type_image ${props.card.link ? 'popup_opened' : ''}`}>
            <figure className="photo">
                <button className="popup__close" type="button" aria-label="Закрыть попап" onClick={props.onClose}></button>
                <img className="photo__item" src={props.card.link} alt={props.card.name} />
                <figcaption className="photo__subtitle">{props.card.name}</figcaption>
            </figure>
        </div>
    )
}

export default ImagePopup;