import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducers/Reducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})