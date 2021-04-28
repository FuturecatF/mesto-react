import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup(props) {
    const avatarUser = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarUser.current.value,

        });
    }

    return (

        <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            isSaving={props.isSaving}
            onSubmit={handleSubmit}
        >
            <input className="popup__input popup__input_type_avatar-link" type="url" id="avatar-link" name="avatar-image"
                autoComplete="on" placeholder="Ссылка на картинку" ref={avatarUser} required />
            <div className="popup__error-container">
                <span className="popup__input-error" id="avatar-link-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;