import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container">
          <button className="profile__avatar-change" type="button" title="Изменить аватар" aria-label="Изменить аватар" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={currentUser.avatar} alt="Фото профиля" /> </button>
        </div>


        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" title="Редактировать" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>


        <button className="profile__add-button" type="button" title="Добавить карточку"
          aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__container">
          {props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
              onCardClick={props.onCardClick}

            />
          ))}

        </ul>
      </section>

    </main>
  )
};

export default Main;