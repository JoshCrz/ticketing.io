import { Injectable } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { tick } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  tickets: Ticket[] = [
    {
      id: 1,
      clientId: 1,
      originator: "John Doe",
      priority: 1,
      subject: "Praesent vestibulum semper sapien, sit amet sagittis ex efficitur eget",
      description: "Nunc placerat augue nisi, nec posuere turpis pharetra vitae. Proin a consectetur mi, a tincidunt neque. Curabitur fermentum lectus scelerisque eros porttitor, malesuada convallis est suscipit.",
      status: 1,
      notes: [
        {
          commentor: "John Doe",
          description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin feugiat feugiat purus a cursus."
        }
      ]
    },
    {
      id: 2,
      clientId: 2,
      originator: "Jane Doe",
      priority: 3,
      subject: "Proin a consectetur mi, a tincidunt neque",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin feugiat feugiat purus a cursus.",
      status: 0,
      notes: []
    },
    {
      id: 3,
      clientId: 1,
      originator: "John Doe",
      priority: 2,
      subject: "Praesent vestibulum semper sapien, sit amet sagittis ex efficitur eget",
      description: "Nunc placerat augue nisi, nec posuere turpis pharetra vitae. Proin a consectetur mi, a tincidunt neque. Curabitur fermentum lectus scelerisque eros porttitor, malesuada convallis est suscipit.",
      status: 1,
      notes: [
        {
          commentor: "John Doe",
          description: "Vivamus aliquam non eros a cursus. Nullam libero lectus, cursus ut imperdiet a, dictum id quam. Etiam sagittis nisl est, vel consectetur augue hendrerit in. Aliquam maximus erat orci, eget facilisis massa rhoncus rhoncus. Nam at interdum mauris, eu euismod eros. Aenean imperdiet velit ut finibus commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ornare, sem et laoreet efficitur, purus leo convallis ex, eget ultricies nulla elit nec libero. Pellentesque facilisis eu leo quis tempor."
        }
      ]
    },
    {
      id: 4,
      clientId: 2,
      originator: "Jane Doe",
      priority: 2,
      subject: "Proin a consectetur mi, a tincidunt neque",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin feugiat feugiat purus a cursus.",
      status: 0,
      notes: [
        {
          commentor: "John Doe",
          description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin feugiat feugiat purus a cursus."
        }
      ]
    },
    {
      id: 5,
      clientId: 3,
      originator: "John Doe",
      priority: 3,
      subject: "Praesent vestibulum semper sapien, sit amet sagittis ex efficitur eget",
      description: "Vivamus aliquam non eros a cursus. Nullam libero lectus, cursus ut imperdiet a, dictum id quam. Etiam sagittis nisl est, vel consectetur augue hendrerit in. Aliquam maximus erat orci, eget facilisis massa rhoncus rhoncus. Nam at interdum mauris, eu euismod eros. Aenean imperdiet velit ut finibus commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ornare, sem et laoreet efficitur, purus leo convallis ex, eget ultricies nulla elit nec libero. Pellentesque facilisis eu leo quis tempor.",
      status: 1,
      notes: []
    },
    {
      id: 6,
      clientId: 1,
      originator: "Jane Doe",
      priority: 1,
      subject: "Proin a consectetur mi, a tincidunt neque",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin feugiat feugiat purus a cursus.",
      status: 0,
      notes: []
    }

  ]

  constructor() { }

  getAllTickets = () => {
    return this.tickets;
  }

  getTicketById = (id) => {
    let tickets = this.getTickets();
    if(tickets){
      for(let i = 0; i < tickets.length; i++){
        if(tickets[i].id == id){
          return tickets[i]
        }
      }
    }
  } 

  setTickets = (tickets) => {
    if(localStorage.getItem('tickets')){
      localStorage.clear();
    }
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }

  getTickets = () => {
    if(localStorage.getItem('tickets')){
      let data = localStorage.getItem('tickets');
      return JSON.parse(data);
    } else {
      this.setTickets(this.tickets)
      return this.tickets;      
    }
  }

  saveTicket = (ticket) => {
    let tickets = this.getTickets();
    tickets.push(ticket);    
    this.setTickets(tickets);
  }

}

