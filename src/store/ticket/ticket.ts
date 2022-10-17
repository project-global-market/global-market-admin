import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { T_TicketState } from './models'

import { I_Ticket } from 'models/tickets'

const initialState: T_TicketState = {
  tickets: [],
}

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setTickets: (state, action: PayloadAction<I_Ticket[]>) => {
      state.tickets = action.payload
    },
  },
})

export const { setTickets } = ticketSlice.actions
