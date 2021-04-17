class Api {
    constructor(apiOptions) {
        this._baseUrl = apiOptions.baseUrl;
        this._headers = apiOptions.headers;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._getResponseData)
    }

    postNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            }),
        })
            .then(this._getResponseData)
    }

    getUserProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._getResponseData)
    }

    setUserProfile(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(this._getResponseData)
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._getResponseData)
    }

    putLikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._getResponseData)
    }

    deleteLikeCard(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._getResponseData)
    }

    setUserAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(this._getResponseData)
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
    headers: {
        authorization: '5f8b754d-d9bd-4968-8e18-8ef729e76020',
        'content-type': 'application/json'
    }
});