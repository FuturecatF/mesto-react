import React from 'react';
import { api } from '../utils/api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setInitialCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserProfile(), api.getInitialCards()])
      .then(([data, cards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setInitialCards(cards);
        console.log(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container">
          <button className="profile__avatar-change" type="button" title="Изменить аватар" aria-label="Изменить аватар" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Фото профиля" /> </button>
        </div>


        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-button" type="button" title="Редактировать" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>


        <button className="profile__add-button" type="button" title="Добавить карточку"
          aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__container">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}

            />
          ))}

        </ul>
      </section>

    </main>
  )
};

export default Main;