import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthserService } from "../authser.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(private _auth: AuthserService, private router: Router) {}

  ngOnInit() {}
  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/employee"]);
      },
      err => console.log(err)
    );
  }
}
