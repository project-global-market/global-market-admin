import { useLayoutEffect } from 'react'

import { Content } from './components/Content'
import { Sidebar } from './components/Sidebar'
import { subscribe, unsubscribe } from './socket'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_TicketsEmit } from 'models/tickets'
import { socket } from 'services/socket'

export const Tickets = () => {
  const { tickets } = useStoreSelector((state) => ({ tickets: state.ticket.tickets }))

  const dispatch = useStoreDispatch()

  useLayoutEffect(() => {
    dispatch(subscribe())
    socket.emit(E_TicketsEmit.requestTickets)

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  return (
    <>
      <Sidebar />
      <Content />
      {JSON.stringify(tickets, null, 2)}
    </>
  )
}
