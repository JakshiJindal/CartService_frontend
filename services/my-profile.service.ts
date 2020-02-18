import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {
  constructor(private httpClient: HttpClient, private router: Router, private abc: MyProfileService) {
  }
  getProfile() {
    const token =  sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2019/userq/myp';
    return this.httpClient.get('http://localhost:2019/userq/myprofile', {headers});
  }
}
