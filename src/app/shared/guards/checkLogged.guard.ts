import { Injectable } from "@angular/core";
import { CanLoad, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CheckLogged implements CanLoad {
  constructor(
    private router: Router
  ) {}
  canLoad() {
    console.info(localStorage.getItem('dataLogin'));
    if (localStorage.getItem('dataLogin') === '' || localStorage.getItem('dataLogin') === null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}