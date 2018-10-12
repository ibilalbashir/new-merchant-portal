import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import { SharedClass } from './shared/services/SharedClass';


@Component({
    selector: 'app-my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  private _router: Subscription;

  constructor( private router: Router , private http: HttpClient) {
    if (localStorage.getItem('user.id')) {

    }
    SharedClass.access_token = JSON.stringify(localStorage.getItem('user.id'));
      console.log(JSON.stringify(localStorage.getItem('user.id')))
  }

    ngOnInit() {
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        const body = document.getElementsByTagName('body')[0];
        const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
        if (body.classList.contains('modal-open')) {
          body.classList.remove('modal-open');
          modalBackdrop.remove();
        }
      });

    }
}
