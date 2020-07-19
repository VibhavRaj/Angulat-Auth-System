import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Employee } from "./crudmodel";
import { catchError, retry } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class UserService {
  private baseUrl = "/crud";
  //private baseUrl = "http://localhost:3000/crud";
  //private baseUrl = "../assets/data.json";
  constructor(private http: HttpClient) {}
  getConfig(): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + "/employee");
    retry(3), // retry a failed request up to 3 times
      catchError(this.handleError); // then handle the error
    // .pipe(catchError(this.handleError("getConfig", employee)));
  }

  /** POST: add a new hero to the database */
  postConfig(employee: Employee): Observable<Employee> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
      })
    };
    return this.http
      .post<Employee>(this.baseUrl, employee, httpOptions)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: delete the hero from the server */
  deleteConfig(id: number): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
      })
    };
    const url = `${this.baseUrl}/${id}`; // DELETE api/heroes/42
    return this.http
      .delete(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  updateConfig(employee: Employee): Observable<Employee> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
      })
    };
    httpOptions.headers = httpOptions.headers.set(
      "Authorization",
      "my-new-auth-token"
    );
    return this.http
      .put<Employee>(this.baseUrl, employee, httpOptions)
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

  //   let headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   let options = new HttpRequest({ headers: headers});
  //   return this.http.post(this.postUrl,JSON.stringify(video),options)
  //   .map((res: Response) => res.json());
  // proxy-confirm.json
  // {
  //   "/api/*": {
  //     "target": "http://localhost:3000",
  //     "secure": false,
  //     "logLevel": "debug",
  //     "changeOrigin": true
  //   }
  // }

  // getEmployee(id: number): Observable<Object> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  // createEmployee(employee: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}`, employee);
  // }

  // updateEmployee(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  // deleteEmployee(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }

  // getEmployeesList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }
}
