import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../Httpclient.Service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private httpclientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  get() {
    this.router.navigate(['/home']);
  }
}
