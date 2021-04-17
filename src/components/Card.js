import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
        console.log(props.card)
    };

    return (
        <li className="element">
            <div onClick={handleClick}>
                <img className="element__photo" src={props.card.link} alt={props.card.name} />
            </div>
            <button className="element__delete-icon" type="button" aria-label="Удалить"></button>
            <div className="element__footer">
                <h2 className="element__subtitle">{props.card.name}</h2>
                <div className="element__likes-container">
                    <button className="element__like" type="button" aria-label="Лайк"></button>
                    <span className="element__count-likes">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;