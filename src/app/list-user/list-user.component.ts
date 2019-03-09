import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceService} from "../service/user-service.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  }

}
