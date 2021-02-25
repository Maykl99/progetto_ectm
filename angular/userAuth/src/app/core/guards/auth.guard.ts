import { UserService } from '../../user/service/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService){}

  canActivate(): boolean
  {
    let token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
