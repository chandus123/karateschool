import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {


  leaders    = [];
  seconddan  = [];
  thirddan   = [];
  fourthdan  = [];

  constructor(private MainService: MainService) { }

  ngOnInit() {
      this.leaders = this.MainService.getMembers('1');
      this.seconddan = this.MainService.getMembers('2');
      this.thirddan = this.MainService.getMembers('3');
      this.fourthdan = this.MainService.getMembers('4');
  }

}
