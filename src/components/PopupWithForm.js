import React from 'react';

function PopupWithForm({ children, isOpen, name, title, onSubmit, isSaving, onClose, buttonText, disabled}) {
     /* if (isSaving) {
         disable = true;
     } */
       /*  var disabled = true; */
        
     
    /* const [disabled, setDisabled] = React.useState({disabled: true}); */
    return (
        <div className={`popup /* popup_type_${name} */ ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form popup__form_type_profile-form" name={name} onSubmit={onSubmit} noValidate>
                    {children}
                    <button className="popup__button popup__button_type_edit-profile" type="submit" disabled={disabled}> {isSaving ? 'Загрузка...' : buttonText}</button>
                </form>
                <button className="popup__close popup__close_type_edit" type="button" aria-label="Закрыть форму" onClick={onClose}></button>
            </div>
        </div>

    )
};

export default PopupWithForm;