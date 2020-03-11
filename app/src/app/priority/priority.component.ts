import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit {

  @Input() priority: number;

  constructor() { }

  ngOnInit() {
  }

}
