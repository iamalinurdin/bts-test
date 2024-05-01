import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage
}
const rootReducers = combineReducers({
  auth: authSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)