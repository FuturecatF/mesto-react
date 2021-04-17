import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form popup__form_type_profile-form" name={props.name} noValidate>
                    {props.children}
                    <button className="popup__button popup__button_type_edit-profile" type="submit">{props.buttonText}</button>
                </form>
                <button className="popup__close popup__close_type_edit" type="button" aria-label="Закрыть форму" onClick={props.onClose}></button>
            </div>
        </div>

    )
};

export default PopupWithForm;