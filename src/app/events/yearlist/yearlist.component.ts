import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MainService } from '../../main.service';
import { Eventdetails } from  '../../event.model';


@Component({
  selector: 'app-yearlist',
  templateUrl: './yearlist.component.html',
  styleUrls: ['./yearlist.component.css']
})
export class YearlistComponent implements OnInit{

  i;
  currentEvent;
  yearlist;
  @Output() CustomEvent = new EventEmitter < {year: string} > ();
  @Input()  cYear;

  constructor(private MainService: MainService) { }

  ngOnInit() {
    
    this.yearlist       = this.MainService.getEvents().keys();
  }

  yearSelected(yearval)
  {
    
    this.yearlist       = this.MainService.getEvents().keys();
    this.CustomEvent.emit({year: yearval});
  }
}
