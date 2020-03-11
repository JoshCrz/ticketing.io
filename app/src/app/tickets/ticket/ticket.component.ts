import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/interfaces/ticket';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  id: number;
  ticket: Ticket;

  observer$: any = new Observable((observer) => {
    observer.next(this.getTicketById(this.id));    
  })

  constructor(private ticketsService: TicketsService, private route: ActivatedRoute) { }


  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
        this.observer$.subscribe((res: any) => {
          if (res) {
            this.ticket = res;
          }
        }) 
      }
    })
  }

  getTicketById = (id) => {
    return this.ticketsService.getTicketById(id);
  }

  toggleStatus() {
    if (this.ticket.status == 1) {
      this.ticket.status = 0;
    } else {
      this.ticket.status = 1;
    }
  }

}
