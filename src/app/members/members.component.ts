import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {


  leaders  = [];
  members  = [];

  constructor(private MainService: MainService) { }

  ngOnInit() {
      this.leaders = this.MainService.getLeaders();
      this.members = this.MainService.getMembers();
  }

}
