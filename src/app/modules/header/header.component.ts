import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../header.service';
import {UserModel} from './user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usersData: UserModel;

  constructor(private headerService: HeaderService) {
  }


  ngOnInit() {
    this.headerService.userLogin()
      .subscribe((resultData) => {
        localStorage.setItem('loginUser', JSON.stringify(resultData));
      });
  }

}
