import { Injectable } from "@angular/core";
import { Employee } from "./crudmodel";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
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
export class EmpService {
  constructor(private http: HttpClient) {}

  baseurl: string = "http://localhost:3000/crud";
  getAllProducts() {
    return this.http.get<Employee[]>(this.baseurl);
  }

  getProductById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseurl}/${id}`);
  }

  addProduct(e: Employee) {
    return this.http.post(this.baseurl, e, httpOptions);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseurl + "/" + id);
  }

  updateProduct(e: Employee): Observable<Employee> {
    return this.http
      .put<Employee>(`${this.baseurl}/${e.id}`, e, httpOptions)
      .pipe(catchError(this.handleError));
  }
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
