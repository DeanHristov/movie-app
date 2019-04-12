export const ON_TOGGLE_PANEL = 'ON_TOGGLE_PANEL';


export const togglePanel = (state = false) => ({
  type: ON_TOGGLE_PANEL,
  payload: state
})
