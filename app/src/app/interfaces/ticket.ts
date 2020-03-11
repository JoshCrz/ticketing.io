export interface Ticket {
  id: number,
  clientId: number,
  originator: string,
  priority: number,
  subject: string,
  description: string,
  status: number,
  notes: Note[]
}

export interface Note {
  commentor: string,
  description: string
}
