import React from "react";

function InfoToolTip(props) {
  // Create a variables statuses
  const statusMessage = props.success
    ? "Success! You have now been registered."
    : "Oops, something went wrong! Please try again.";
  const statusIcon = `${
    props.success
      ? "popup__status-icon_type_success"
      : "popup__status-icon_type_error"
  }`;

  function handleOverlayClick(evt) {
    if (evt.target.classList.contains("popup")) {
      props.onClose();
    }
  }

  return (
    <div
      className={`popup popup_type_register ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={handleOverlayClick}
    >
      <div className="popup__container popup__container_type_confirmation">
        <button
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <div className={`popup__status-icon ${statusIcon}`}></div>
        <h2 className="popup__title">{statusMessage}</h2>
      </div>
    </div>
  );
}

export default InfoToolTip;
