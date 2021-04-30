import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup({ isOpen, onClose, isSaving, onConfirm }) {
    function handleSubmit(e) {
      e.preventDefault();
      onConfirm();

    };
  
    return (
    <PopupWithForm
      title="Вы уверены?"
      name="submit"
      buttonText="Да"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        isSaving={isSaving}
    />
    )
  }

export default ConfirmPopup;