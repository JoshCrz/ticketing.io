import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { TicketsComponent } from './tickets/tickets.component';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { TicketComponent } from './tickets/ticket/ticket.component';
import { PriorityComponent } from './priority/priority.component';
import { NewTicketComponent } from './tickets/new-ticket/new-ticket.component';

const appRoutes: Routes = [
  {
    path: '', component: TicketsComponent    
  },
  { path: 'ticket/:id', component: TicketComponent },
  { path: 'new-ticket', component: NewTicketComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    TicketsComponent,
    TicketComponent,
    PriorityComponent,
    NewTicketComponent
  ],
  imports: [    
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
