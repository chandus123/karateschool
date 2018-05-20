import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainService } from '../main.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GalleryComponent {

  constructor(private MainService: MainService, private modalService: NgbModal, private router: Router) { }

  currentGallery;
  closeResult;
  selectedImg;
  currentYear;
  selectImgIndex;

  ngOnInit() {
    
    this.currentGallery = this.MainService.getCurrentGallery().value;
    this.currentYear    = this.MainService.getCurrentGalleryYear().value;
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }


  open(content, item, i)
  {
    console.log(i);
    this.selectImgIndex     = i;
    this.selectedImg        = item;
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with:`;
    }, (reason) => {
      this.closeResult = `Dismissed `;
    });
  }

  onYearSelect($event)
  {
    this.currentYear    = $event;
    this.currentGallery = this.MainService.getGallery().get($event);
  }

  previous()
  {
    
    if(typeof this.currentGallery[(this.selectImgIndex - 1)] != 'undefined')
    {
      
      this.selectImgIndex--;
      this.selectedImg  = this.currentGallery[this.selectImgIndex];
    }
    
  }

  next()
  {

    if(typeof this.currentGallery[(this.selectImgIndex + 1)] != 'undefined')
    {
      
      this.selectImgIndex++;
      this.selectedImg  = this.currentGallery[this.selectImgIndex];
    }
    
  }

}
