import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HeaderService {

  constructor(private  http: HttpClient) {
  }

  userLogin(): any {
    return this.http.get('http://localhost:4000/getusers');
  }

}
