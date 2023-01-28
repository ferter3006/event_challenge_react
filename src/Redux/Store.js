import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AppReducer from './AppReducer'

const rootReducer = combineReducers({
  appState: AppReducer
})

export const store = configureStore({ reducer: rootReducer })
