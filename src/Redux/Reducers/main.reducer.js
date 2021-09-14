const initialState = {
  authorized: false,
  fahrenheit: false,
  pushToken: false,
  androidLocationPermissions: false,
  authTokenExpirationDate: null,
  renewTokenExpirationDate: null,
  vibrations: true,
  sounds: true,
  developersMode: false,
  language: "en",
  navigatedFromPage: "",
  currentSsid: "",
  popupPostponeDate: "",
  weather: {},
  whatsNew: [],
  tuyaUserLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTHORIZED":
      return Object.assign({}, state, {
        authorized: action.payload.authorized,
      });
    case "SET_PUSH_TOKEN":
      return Object.assign({}, state, { pushToken: action.payload });
    case "REMOVE_PUSH_TOKEN":
      return Object.assign({}, state, { pushToken: false });
    case "SET_ANDROID_LOCATION_PERMISSIONS":
      return Object.assign({}, state, {
        androidLocationPermissions: action.payload,
      });
    case "SWITCH_TEMPERATURE_UNIT":
      return Object.assign({}, state, { fahrenheit: action.payload });
    case "SWITCH_VIBRATIONS_STATE":
      return Object.assign({}, state, { vibrations: action.payload });
    case "SWITCH_SOUNDS_STATE":
      return Object.assign({}, state, { sounds: action.payload });
    case "SWITCH_DEVELOPERS_MODE":
      return Object.assign({}, state, { developersMode: action.payload });
    case "USER_LOGOUT":
      return Object.assign({}, state, {
        pushToken: false,
        authorized: false,
      });
    case "CHANGE_LANGUAGE":
      return Object.assign({}, state, { language: action.payload.lang });
    case "NAVIGATE_TO":
      return Object.assign({}, state, {
        navigatedFromPage: action.payload.context,
      });
    case "NAVIGATE_WITH_SIDEBAR":
      return Object.assign({}, state, {
        navigatedFromPage: action.payload.context,
      });
    case "SAVE_SSID":
      return Object.assign({}, state, { currentSsid: action.payload });
    case "SET_POPUP_POSTPONE":
      return Object.assign({}, state, {
        popupPostponeDate: action.payload.date,
      });
    case "FETCH_WEATHER":
      return Object.assign({}, state, { weather: action.payload });
    case "GET_WHATS_NEW":
      return Object.assign({}, state, { whatsNew: action.payload });
    case "TUYA_USER_LOGGED":
      return Object.assign({}, state, { tuyaUserLoggedIn: action.payload });
    default:
      return state;
  }
};

export default reducer;
