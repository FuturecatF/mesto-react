import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarClick(true);
  }

  function handleEditProfileClick() {
    setEditProfileClick(true);
  }


  function handleAddPlaceClick() {
    setAddPlaceClick(true);
  }

  function closeAllPopups() {
    setEditProfileClick(false);
    setAddPlaceClick(false);
    setEditAvatarClick(false);
    setSelectedCard({});
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        {isEditProfilePopupOpen ?
          <PopupWithForm
            title="Редактировать профиль"
            name="edit"
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            children={(
              <>
                <input className="popup__input popup__input_type_profile-name" type="text" id="profile-name" name="name"
                  minLength="2" maxLength="40" placeholder="Имя" required />
                <div className="popup__error-container">
                  <span className="popup__input-error" id="profile-name-error"></span>
                </div>

                <input className="popup__input popup__input_type_profile-job" type="text" id="profile-job" name="job"
                  minLength="2" maxLength="200" placeholder="О себе" required />
                <div className="popup__error-container">
                  <span className="popup__input-error" id="profile-job-error"></span>
                </div>
              </>
            )}
          />
          : ''}
        {isAddPlacePopupOpen ?
          <PopupWithForm
            title="Новое место"
            name="new-card"
            buttonText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            children={(
              <>
                <input className="popup__input popup__input_type_card-name" type="text" id="card-name" name="image-name"
                  placeholder="Название" minLength="2" maxLength="30" required />
                <div className="popup__error-container">
                  <span className="popup__input-error" id="card-name-error"></span>
                </div>
                <input className="popup__input popup__input_type_card-link" type="url" id="card-link" name="link"
                  autoComplete="on" placeholder="Ссылка на картинку" required />
                <div className="popup__error-container">
                  <span className="popup__input-error" id="card-link-error"></span>
                </div>
              </>
            )}
          />

          : ''}
        {isEditAvatarPopupOpen ?
          <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            children={(
              <>
                <input className="popup__input popup__input_type_avatar-link" type="url" id="avatar-link" name="avatar-image"
                  autoComplete="on" placeholder="Ссылка на картинку" required />
                <div className="popup__error-container">
                  <span className="popup__input-error" id="avatar-link-error"></span>
                </div>
              </>
            )}
          />

          : ''}
        {selectedCard.link ?
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
          />
          : ''}

              {/* // на будущее */}
        {/*  <div className="popup popup_type_submit">
          <div className="popup__container">
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form" name="popup-form">
              <button className="popup__button popup__button_type_yes" type="submit">Да</button>
            </form>
            <button className="popup__close" type="button" aria-label="Закрыть форму"></button>
          </div>
        </div>*/}
      </div>
    </div>  

  );
}

export default App;
