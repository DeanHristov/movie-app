export const ON_TOGGLE_MENU = 'ON_TOGGLE_MENU';


export const toggleMenu = (state = false) => ({
  type: ON_TOGGLE_MENU,
  payload: state
})
