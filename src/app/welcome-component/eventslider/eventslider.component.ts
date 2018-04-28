import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainService } from '../../main.service';
import { Eventdetails } from  '../../event.model';

@Component({
  selector: 'app-eventslider',
  templateUrl: './eventslider.component.html',
  styleUrls: ['./eventslider.component.css']
})
export class EventsliderComponent implements OnInit {

  events;

  constructor(private MainService : MainService) { }

  ngOnInit() {
    this.events = this.MainService.getCurrentEvents().value;
    console.log('events');
    console.log(this.events);
  }

}
