import { createAsyncThunk } from '@reduxjs/toolkit'

import { E_TicketsSubscribe, I_Ticket } from 'models/tickets'
import { socket } from 'services/socket'
import { setTickets } from 'store/ticket'

export const subscribe = createAsyncThunk('tickets', async (_, { dispatch }) => {
  socket.on(E_TicketsSubscribe.getTickets, (data: { tickets: I_Ticket[] }) => {
    dispatch(setTickets(data.tickets))
  })
})

export const unsubscribe = () => {
  socket.off(E_TicketsSubscribe.getTickets)
}
