import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-stuff',
  templateUrl: './my-stuff.component.html',
  styleUrls: ['./my-stuff.component.css'],
})
export class MyStuffComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = {};
  searchTerm = '';
  newUser: any = {};
  userUnavailableMessage = ''; // New property to store the user unavailable message

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  searchUsers() {
    const foundUser = this.users.find((user) =>
      user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    this.selectedUser = foundUser ? { ...foundUser } : {};
    this.userUnavailableMessage = foundUser ? '' : 'User Unavailable';
  }

  addUser() {
    this.users.push({ ...this.newUser });
    this.newUser = {};
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.selectedUser = {};
    this.userUnavailableMessage = '';
  }

  selectUser(user: any) {
    this.selectedUser = { ...user };
    this.userUnavailableMessage = '';
  }
}

