import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [image, setImage] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setImage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name: name,
            link: image,
        });
    };

    return (
        <PopupWithForm
            title="Новое место"
            name="new-card"
            buttonText="Создать"
            isOpen={props.isOpen}
            onClose={props.onClose}
            isSaving={props.isSaving}
            disabled={props.disabled}
            onSubmit={handleSubmit}
        >
            <input onChange={handleChangeName} className="popup__input popup__input_type_card-name" type="text" id="card-name" name="image-name"
                placeholder="Название" minLength="2" maxLength="30" required />
            <div className="popup__error-container">
                <span className="popup__input-error" id="card-name-error"></span>
            </div>
            <input onChange={handleChangeDescription} className="popup__input popup__input_type_card-link" type="url" id="card-link" name="link"
                autoComplete="on" placeholder="Ссылка на картинку" required />
            <div className="popup__error-container">
                <span className="popup__input-error" id="card-link-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup;