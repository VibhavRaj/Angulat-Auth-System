import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { AuthserService } from "./authser.service";

@Injectable({
  providedIn: "root"
})
export class InterService implements HttpInterceptor {
  constructor(private inject: Injector) {}
  intercept(req, next) {
    let authservice = this.inject.get(AuthserService);
    let tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authservice.getToken()}`
      }
    });
    return next.handle(tokenReq);
  }
}
