
import { CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SharedClass } from './SharedClass';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    url = environment.url;
    user: any
    constructor(private http: HttpClient) {

    }


    logIn(obj): Observable<Object> {
        return this.http.post(`${this.url}/Merchants/login`, obj);
    }

    isLoggedIn() {
        const user = localStorage.getItem('user')
        if (user) {
            return true

        } else {
            return false
        }
       // return !!localStorage.getItem('token'); // always return true or false
    }
}
