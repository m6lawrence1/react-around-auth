class Auth {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Err: ${res.status}`);
  }

  registerUser(email, password, name, about, avatar) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
        name: "You",
        about: "About you",
        avatar:
          "https://www.pinclipart.com/picdir/middle/78-780477_about-us-avatar-icon-red-png-clipart.png",
      }),
    }).then(this._checkServerResponse);
  }

  loginUser(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(this._checkServerResponse)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          return data;
        } else {
          return;
        }
      })
      .catch((err) => console.log(err));
  }

  checkUserValidity(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkServerResponse)
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  getContent(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
      })
      .then((data) => data)
      .catch((err) => console.log(err));
  }
}

const auth = new Auth({
  baseUrl: "https://api.michael.students.nomoreparties.site",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default auth;
