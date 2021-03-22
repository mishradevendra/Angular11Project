import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  users: any;

  currentIndex = -1;
  searchname: string = "";

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers() {
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

}






