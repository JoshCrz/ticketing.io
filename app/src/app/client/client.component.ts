import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input() clientId: number;
  @Input() size: string;
  constructor() { }

  ngOnInit() {
  }

}
