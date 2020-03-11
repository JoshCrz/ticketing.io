import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service'; 
import { Ticket } from 'src/app/interfaces/ticket';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[];

  observer$: any = new Observable((observer) => {
    observer.next(this.ticketsService.getTickets());
  })

  constructor(private ticketsService: TicketsService) { }

  ngOnInit() {  

    this.observer$.pipe(debounceTime(2000))
      .subscribe((res: any) => {
      if (res) {
        this.tickets = res;
      }
    })
  }

}
