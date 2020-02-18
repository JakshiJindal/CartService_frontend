import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  isLoggedIn(bool: boolean) {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }
  checklogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }
  addUser(user) {
    return this.httpClient.post('http://localhost:2019/api/addUser', user).subscribe(res => {
      this.router.navigate(['home']);
    } );
  }
  edit(bool: boolean) {
    localStorage.setItem('edit', String(bool));
    return bool;
  }
}
