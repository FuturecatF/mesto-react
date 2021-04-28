import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardDeleteButtonClassName = (
        `element__delete-icon ${isOwn ? 'element__delete-icon' : ''}`
    );
    const cardLikeButtonClassName = (
        `element__like ${isLiked ? 'element__like_active' : ''}`
    );

    function handleLikeClick() {
        props.onCardLike(props.card);
    };

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    };

    function handleClick() {
        props.onCardClick(props.card);
    };

    return (
        <li className="element">
            <div onClick={handleClick}>
                <img className="element__photo" src={props.card.link} alt={props.card.name} />
            </div>
            <button className={cardDeleteButtonClassName} style={isOwn ? {} : { display: 'none' }} type="button" aria-label="Удалить" onClick={handleDeleteClick}></button>
            <div className="element__footer">
                <h2 className="element__subtitle">{props.card.name}</h2>
                <div className="element__likes-container">
                    <button className={cardLikeButtonClassName} type="button" aria-label="Лайк" onClick={handleLikeClick}></button>
                    <span className="element__count-likes">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;