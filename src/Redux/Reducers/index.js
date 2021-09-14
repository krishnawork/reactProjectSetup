import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import LoderReducer from "./loder.reducer";
import mainReducer from "./main.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  loder: LoderReducer,
  main: mainReducer,
});

export default rootReducer;
