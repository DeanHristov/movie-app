export const ON_TOGGLE_PANEL = 'ON_TOGGLE_PANEL';
export const ON_TOGGLE_MENU = 'ON_TOGGLE_MENU';
export const ON_TOGGLE_SEARCH_FORM = 'ON_TOGGLE_SEARCH_FORM';


export const togglePanel = (payload = false) => ({
  type: ON_TOGGLE_PANEL,
  payload
});

export const toggleMenu = (payload = false) => ({
  type: ON_TOGGLE_MENU,
  payload
});


export const toggleSearchForm = (payload = false) => ({
  type: ON_TOGGLE_SEARCH_FORM,
  payload
});
