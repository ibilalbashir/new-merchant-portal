import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { SharedClass } from './shared/services/SharedClass';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private _authService: AuthService, private _router: Router) {

 }


 canActivate(): boolean {
   if (this._authService.isLoggedIn()) {
    const user = JSON.parse(localStorage.getItem('user'));
    SharedClass.access_token = user['id'];
    console.log(SharedClass.access_token);

     return true
   } else {
    this._router.navigate(['/'])
     return false
   }
 }
}
