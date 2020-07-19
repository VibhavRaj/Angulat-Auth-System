import { Component, OnInit } from "@angular/core";
import { AuthserService } from "../authser.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerUserData = {};
  constructor(private _auth: AuthserService, private router: Router) {}

  ngOnInit() {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res),
          localStorage.setItem("token", res.token),
          this.router.navigate(["/employee"]);
      },
      err => console.log(err)
    );
  }
}
