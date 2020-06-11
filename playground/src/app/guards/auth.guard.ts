import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem('login')) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
