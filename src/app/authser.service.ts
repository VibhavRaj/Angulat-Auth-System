import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { Employee } from "./crudmodel";
import { catchError, retry } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};
@Injectable({
  providedIn: "root"
})
export class AuthserService {
  private _registerUrl = "http://localhost:3000/user/register";
  private _loginUrl = "http://localhost:3000/user/login";
  private _employeeUrl = "http://localhost:3000/crud";
  constructor(private http: HttpClient, private router: Router) {}

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  logout() {
    return localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
  getToken() {
    return localStorage.getItem("token");
  }

  //employees
  getEmp() {
    return this.http.get<any>(this._employeeUrl);
  }
  getEmpbyid(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.get<any>(`${this._employeeUrl}/${id}`, httpOptions);
  }

  addEmp(employee: Employee) {
    return this.http.post(`${this._employeeUrl}`, employee);
  }

  updateEmp(id: number): Observable<Employee> {
    httpOptions.headers = httpOptions.headers.set(
      "Authorization",
      "my-new-auth-token"
    );
    return this.http
      .post<Employee>(`${this._employeeUrl}`, id, httpOptions)
      .pipe(catchError(this.handleError));
  }
  deleteEmp(id: number): Observable<{}> {
    const url = `${this._employeeUrl}/${id}`;
    return this.http
      .delete(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
  // Handle Error Response
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}
