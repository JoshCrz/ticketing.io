import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TicketsService } from 'src/app/services/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {

  newTicketForm: FormGroup;
  submitted: boolean;

  constructor(private ticketsService: TicketsService, private router: Router) { }

  ngOnInit() {

    this.newTicketForm = new FormGroup({
      originator: new FormControl('Admin'),
      subject: new FormControl('', Validators.required),
      description: new FormControl(''),
      priority: new FormControl(3),
      clientId: new FormControl(1)
    })

  }

getId(){
  let tickets = this.ticketsService.getTickets();
  let highestId = 0;
  for(let i = 0; i < tickets.length; i++){
    if(tickets[i].id > highestId){
      highestId = tickets[i].id;
    }
    if((tickets.length - 1) == i){
      return highestId += 1;
    }
  }
}

  submit = (form) => {

    this.submitted = true;

    if(form.valid){
      let data = form.value;
      data['id'] = this.getId(); 
      data['status'] = 1;
      this.ticketsService.saveTicket(form.value)
      this.router.navigate(['']);
    }
  }

}
