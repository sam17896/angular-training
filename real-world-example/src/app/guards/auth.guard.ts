import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) { }
  canActivate(
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('login')) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }

  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('login')) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
