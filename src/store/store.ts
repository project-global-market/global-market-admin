import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { ticketSlice } from './ticket'

const rootReducer = combineReducers({
  [ticketSlice.name]: ticketSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch
