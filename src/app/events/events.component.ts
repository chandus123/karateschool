import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  currentEvent;
  currentYear;

  constructor(private MainService: MainService) { }

  ngOnInit() {

    this.currentEvent   = this.MainService.getEvents().values().next().value;
    this.currentYear    = this.MainService.getEvents().keys().next().value;
  }

  onYearSelect($event)
  {
    this.currentYear    = $event.year;
    this.currentEvent   = this.MainService.getEvents().get($event.year);
  }

}
