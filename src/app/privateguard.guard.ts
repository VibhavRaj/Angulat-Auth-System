import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthserService } from "./authser.service";
@Injectable({
  providedIn: "root"
})
export class PrivateguardGuard implements CanActivate {
  constructor(private _auth: AuthserService, private router: Router) {}
  canActivate(): boolean {
    if (this._auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
