import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../header.service';
import {UserModel} from '../user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any;

  constructor(private headerService: HeaderService) {
  }

  login(userCredentials: any) {
    this.userData = localStorage.getItem('loginUser');
    console.log(this.userData, 'in login');
    this.userData = JSON.parse(this.userData);
    this.userData.forEach((user: UserModel) => {
      console.log('single user', user);
    });
  }

  ngOnInit() {
  }

}
