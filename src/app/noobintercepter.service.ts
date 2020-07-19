import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Employee } from "./crudmodel";
import { catchError, retry } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class NoobintercepterService implements HttpInterceptor {
  private baseUrl = "/crud";
  //private baseUrl = "http://localhost:3000/crud";

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.body) {
      const duplicate = req.clone({ body: req.body.replace(/pizza/gi, "🍕") });
      return next.handle(duplicate);
    }
    return next.handle(req);
  }

  constructor() {}
}
