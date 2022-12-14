import { T_SocketId, T_UserId } from './app'

export type T_TicketId = string

export enum E_TicketsEmit {
  requestTickets = 'requestTickets',
  createTicket = 'createTicket',
  sendTicketMessage = 'sendTicketMessage',
}

export enum E_TicketsSubscribe {
  getTickets = 'getTickets',
  getTicket = 'getTicket',
  getTicketMessage = 'getTicketMessage',
}

export enum E_TicketType {
  opened = 'opened',
  closed = 'closed',
}

export type T_AuthorData = {
  id: T_UserId
  socketId: T_SocketId
  email: string
  username: string
}

export type I_TicketMessage = {
  id: string
  author: T_AuthorData
  text: string
}

export interface I_Ticket {
  id: T_TicketId
  author: T_AuthorData
  title: string
  subTitle: string
  type: E_TicketType
  messages: I_TicketMessage[]
}
