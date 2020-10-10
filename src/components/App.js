import React, { useState } from "react";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import "../index.css";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import InfoToolTip from "./InfoTooltip";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmationPopup from "./ConfirmationPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import auth from "../utils/auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  // Login/Registration
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const history = useHistory();
  // User Profile/Cards
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [deletedCard, setDeletedCard] = useState(null);

  React.useEffect(() => {
    api
      .getUserProfile()
      .then((userProfile) => {
        setCurrentUser(userProfile);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        initialCards.forEach((card) => {
          setCards([...initialCards, card]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(tokenCheck, []);

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkUserValidity(token)
        .then((res) => {
          if (res && res.data) {
            setLoggedIn(true);
            setUserEmail(res.data.email);
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleSignup({ email, password }) {
    auth
      .registerUser(email, password)
      .then((res) => {
        if (res && res.data) {
          setIsInfoToolTipOpen(true);
          setAuthSuccess(true);
          setLoggedIn(true);
          setUserEmail(res.data.email);
          history.push("/");
        }
      })
      .catch((err) => {
        setIsInfoToolTipOpen(true);
        setAuthSuccess(false);
      });
  }

  function handleSignin({ email, password }) {
    auth
      .loginUser(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem("token", data.token);
          history.push("/");
          tokenCheck();
        }
      })
      .catch((err) => {
        setIsInfoToolTipOpen(true);
        setAuthSuccess(false);
      });
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("token");
    history.push("/signin");
  }

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Send a request to the API and getting the updated card data
    api
      .updateLike(card._id, !isLiked)
      .then((newCard) => {
        // Create a new array based on the existing one and putting a new card into it
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        // Update the state
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    window.addEventListener("keyup", handleEscClose);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    window.addEventListener("keyup", handleEscClose);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    window.addEventListener("keyup", handleEscClose);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    window.addEventListener("keyup", handleEscClose);
  }
  function handleDeleteClick(card) {
    setDeletedCard(card);
    setIsDeletePopupOpen(true);
    window.addEventListener("keyup", handleEscClose);
  }
  function closeAllPopups() {
    window.removeEventListener("keyup", handleEscClose);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard(false);
    setIsInfoToolTipOpen(false);
  }

  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .setUserAvatar({ avatar: avatar })
      .then((userProfile) => {
        setCurrentUser(userProfile);
        setIsEditAvatarPopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser({ name, about }) {
    api
      .setUserProfile({ name: name, about: about })
      .then((userProfile) => {
        setCurrentUser(userProfile);
        setIsEditProfilePopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlace({ title, link }) {
    api
      .addCard({ name: title, link: link })
      .then((newCard) => {
        setCards([...cards, newCard]);
        setIsAddPlacePopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(deletedCard) {
    console.log(deletedCard);
    api
      .deleteCard(deletedCard._id)
      .then(() => {
        const availableCards = cards.filter(
          (card) => card._id !== deletedCard._id
        );
        setCards(availableCards);
        setIsDeletePopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Switch>
            <Route path="/signin">
              <Header
                loggedIn={loggedIn}
                email={userEmail}
                link={{ description: "Sign up", to: "/signup" }}
              />
              <Login onSignin={handleSignin} />
            </Route>
            <Route path="/signup">
              <Header
                loggedIn={loggedIn}
                email={userEmail}
                link={{ description: "Log in", to: "/signin" }}
              />
              <Register onSignup={handleSignup} />
            </Route>
            <ProtectedRoute path="/" loggedIn={loggedIn}>
              <Header
                loggedIn={loggedIn}
                email={userEmail}
                link={{ description: "Log out", to: "#" }}
                onLogout={handleLogout}
              />
              <Main
                cards={cards}
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleDeleteClick}
              />
            </ProtectedRoute>
          </Switch>
          <Footer />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <InfoToolTip
            isOpen={isInfoToolTipOpen}
            onClose={closeAllPopups}
            success={authSuccess}
          />
          <ConfirmationPopup
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onConfirmation={handleCardDelete}
            confirmSelectedCard={deletedCard}
          />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default withRouter(App);
