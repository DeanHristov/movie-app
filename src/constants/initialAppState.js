export const movieState = {
    movies: [
    ],
    movieModal: {
        isOpen: false
    }
}

export const userState = {
    isLogged: false,

    // TODO Replace it with real API endpoint!
    data: {
      fistName: 'khaled',
      lastName: 'børresen',
      gender: 'male',
      email: 'khaled.børresen@example.com',
      login: {
        uuid: null,
        username: 'demo',
        password: 'demo',
        salt: null,
        sha256: null
      }
    }
}

export const intlState = {
    locale: 'en',
    messages: {}
}

export const requestState =  {
  // In this time the UI have to trigger some kind of state like 'spinner' 
  isFetching: false,

  // There should be: 'error' or 'success'
  status: null,

  // Populate it only if the status is 'error'
  error: null,

  // Store timestamp
  lastUpdated: null,

  //
  url: null,

  data: []
};



export const urlRoutes = {
  HOME_URL: '/',
  LOGIN_URL: '/login',
  SEARCH_URL: '/search',
  PAGE_ID: '/:movieId',
  ABOUT: '/about'
}
