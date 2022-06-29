// snippet: a-guard-can-activate
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CheckoutGuard implements CanActivate {
  constructor(private router: Router) {}

  // return về true => cho phép truy cập vào route
  // return về false => không cho phép truy cập vào route
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = JSON.parse(localStorage.getItem('user') as string);

    if (!user) {
      // Redirect về 1 trang cụ thể nào đó
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
}
