import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-galleryyearlist',
  templateUrl: './galleryyearlist.component.html',
  styleUrls: ['./galleryyearlist.component.css']
})
export class GalleryyearlistComponent implements OnInit {

  yearlist;
  @Output() CustomEvent = new EventEmitter < {year: string} > ();
  @Input() cyear;
  constructor(private MainService: MainService) { 

  }

  ngOnInit() {
    
    this.yearlist       = this.MainService.getGallery().keys();
  }

  ngDoCheck(){
    this.yearlist       = this.MainService.getGallery().keys();
  }

  yearSelected(year)
  {
    this.CustomEvent.emit(year);
  }

}
