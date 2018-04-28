import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor(private MainService: MainService, private modalService: NgbModal) { }

  currentGallery;
  closeResult;
  selectedImg;
  currentYear;

  ngOnInit() {
    
    this.currentGallery = this.MainService.getCurrentGallery().value;
    this.currentYear    = this.MainService.getCurrentGalleryYear().value;
  }


  open(content, item)
  {
    this.selectedImg = item;
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

}
