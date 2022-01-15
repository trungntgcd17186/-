import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers/index";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
const persistor = persistStore(store);
export default store;
export { persistor };
