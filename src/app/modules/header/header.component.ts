import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usersData: any;

  constructor(private headerService: HeaderService) {
  }


  ngOnInit() {
    console.log('this is in ngOn');
    this.headerService.userLogin()
      .subscribe((resultData => {
        console.log('usersData', resultData);
        this.usersData = JSON.stringify(resultData);
        localStorage.setItem('loginUser', this.usersData);
      }));

  }

}
