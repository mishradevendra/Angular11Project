import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sort-date',
  templateUrl: './sort-date.component.html',
  styleUrls: ['./sort-date.component.css']
})
export class SortDateComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: any;
  //  currentUser = {
  //   firstName: '',
  //  lastname: '',
  //  pinCode: '',
  //  city: '',
  // joindate: ''
  //  };
  currentIndex = -1;
  message: string | undefined;


  ngOnInit(): void {
    this.retrieveUsersbydoj();
  }

  retrieveUsersbydoj() {

    this.userService.getUserByJoinDate()
      .subscribe(
        data => {
          this.users = data;
          //console.log(data);

        },
        error => {
          console.log(error);
        });

  }
}

