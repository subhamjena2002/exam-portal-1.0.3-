import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 
export class AuthGuard implements CanActivate  {
  constructor(private router:Router) {}
  
  activeRouter:boolean = false ;
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if(isLoggedIn == null || isLoggedIn !== 'true') {
      this.router.navigate(['/login']);
      return false;
    }  
    return true;
  }
}
