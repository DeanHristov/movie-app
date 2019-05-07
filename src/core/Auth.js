import {
  credentials,
  LOCAL_STORAGE
} from "@constants/initialAppState";


class Auth {
  #userCredentials  = null;

  constructor () {
    const { CREDENTIALS_KEY } = LOCAL_STORAGE;
    const savedCredentials = sessionStorage.getItem(CREDENTIALS_KEY) || localStorage.getItem(CREDENTIALS_KEY);

    if (savedCredentials)
      this.#userCredentials = JSON.parse(savedCredentials);

  }

  login (callback) {
    this.#userCredentials  = {
      ...credentials,
      isLogged: true,
    };

    this.setCredentials(this.#userCredentials);
    callback.call(this, this.#userCredentials);
  }

  logout (callback) {
    this.#userCredentials  = null;

    this.setCredentials();
    callback();
  }

  isAuthenticate () {
    return !!this.credentials;
  }

  get credentials() {
    return this.#userCredentials;
  }

  setCredentials (credentials = null, remember = credentials.isRemember) {
    const storage = remember ? localStorage : sessionStorage;

    if (credentials) {
      storage.setItem(
        LOCAL_STORAGE.CREDENTIALS_KEY,
        JSON.stringify(credentials)
      );

      return true;
    }

    storage.removeItem(LOCAL_STORAGE.CREDENTIALS_KEY);
  }
}

export default new Auth();
