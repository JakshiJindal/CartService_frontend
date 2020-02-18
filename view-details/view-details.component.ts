import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../Httpclient.Service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  private user;
id1;
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private httpclientService: HttpClientService) { }

  ngOnInit() {
    return this.httpclientService.getUsers().subscribe((data) => {
      this.user = data;
    });
  }

  get() {
    this.router.navigate(['/home']);
  }
}
