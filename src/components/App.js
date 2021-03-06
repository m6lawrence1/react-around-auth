import React, { useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  Redirect,
  withRouter,
} from "react-router-dom";
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
  const [token, setToken] = useState(localStorage.getItem("token"));
  // Login/Registration
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  // User Profile/Cards
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [deletedCard, setDeletedCard] = useState(null);

  const history = useHistory();

  function handleSignup({ email, password, name, aboutme, avatar }) {
    auth
      .registerUser(email, password, name, aboutme, avatar)
      .then((res) => {
        if (res && res.data) {
          setIsInfoToolTipOpen(true);
          setAuthSuccess(true);
          setLoggedIn(true);
          setUserEmail(res.data.email);
          setToken(res.token);
          localStorage.setItem("token", res.token);
          history.push("/around");
          setCurrentUser(res.data);
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
      .then((res) => {
        if (res.token) {
          setUserEmail(res.data.email);
          setCurrentUser(res.data);
          setToken(res.token);
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          history.push("/around");
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
    const token = localStorage.getItem("token");
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i === currentUser._id);
    // Send a request to the API and getting the updated card data
    api
      .updateLike(token, card._id, !isLiked)
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

  function handleOverlayClick(evt) {
    if (evt.target.classList.contains("popup")) {
      closeAllPopups();
    }
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .setUserAvatar(token, { avatar })
      .then((res) => {
        setCurrentUser(res.data);
        setIsEditAvatarPopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser({ name, about }) {
    api
      .setUserProfile(token, { name, about })
      .then((res) => {
        setCurrentUser(res.data);
        setIsEditProfilePopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlace({ title, link }) {
    api
      .addCard(token, { title, link })
      .then((newCard) => {
        setCards([...cards, newCard]);
        setIsAddPlacePopupOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(deletedCard) {
    api
      .deleteCard(token, deletedCard._id)
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

  React.useEffect(() => {
    if (token) {
      auth
        .getContent(token)
        .then((res) => {
          setLoggedIn(true);
          setUserEmail(res.data.email);
          history.push("/around");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  React.useEffect(() => {
    if (token) {
      const userProfile = api
        .getUserProfile(token)
        .then((res) => {
          if (res && res.data) {
            setCurrentUser(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      const cardList = api
        .getInitialCards(token)
        .then((initialCards) => {
          initialCards.forEach((card) => {
            setCards([...initialCards]);
          });
        })
        .catch((err) => {
          console.log(err);
        });

      Promise.all([userProfile, cardList]);
    }
  }, [loggedIn]);

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Switch>
            <ProtectedRoute path="/around" exact loggedIn={loggedIn}>
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
              <EditAvatarPopup
                onOverlayClick={handleOverlayClick}
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
              />
              <EditProfilePopup
                onOverlayClick={handleOverlayClick}
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
              />
              <AddPlacePopup
                onOverlayClick={handleOverlayClick}
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlace}
              />
              <ImagePopup
                onOverlayClick={handleOverlayClick}
                card={selectedCard}
                onClose={closeAllPopups}
              />
              <ConfirmationPopup
                onOverlayClick={handleOverlayClick}
                isOpen={isDeletePopupOpen}
                onClose={closeAllPopups}
                onConfirmation={handleCardDelete}
                confirmSelectedCard={deletedCard}
              />
            </ProtectedRoute>
            <Route exact path="/signin">
              <Header
                loggedIn={loggedIn}
                email={userEmail}
                link={{ description: "Sign up", to: "/signup" }}
              />
              <Login onSignin={handleSignin} />
            </Route>
            <Route exact path="/signup">
              <Header
                loggedIn={loggedIn}
                email={userEmail}
                link={{ description: "Log in", to: "/signin" }}
              />
              <Register onSignup={handleSignup} />
            </Route>
            <Route exact path="/">
              {loggedIn ? <Redirect to="/around" /> : <Redirect to="/signin" />}
            </Route>
          </Switch>
          <Footer />
          <InfoToolTip
            onOverlayClick={handleOverlayClick}
            isOpen={isInfoToolTipOpen}
            onClose={closeAllPopups}
            success={authSuccess}
          />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default withRouter(App);
