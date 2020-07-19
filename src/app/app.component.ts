import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { Employee } from "./crudmodel";
import { AuthserService } from "./authser.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Node and angular project";

  public userData;

  config: Employee;
  constructor(private service: UserService, private _auth: AuthserService) {}
  ngOnInit(): void {
    this.showConfig();
  }
  showConfig() {
    this.service.getConfig().subscribe(
      data => {
        this.userData = data;
        //this.userData = JSON.stringify(data);
      },
      error => {
        console.log("Error", error);
      }
    );
  }
  ////----

  // addConfig(): void {
  //   this.service.postConfig(newHero)
  //     .subscribe(hero => this.userData.push(hero));
  // }

  //-----

  // deleteConfig(): void {
  //   this.service.deleteConfig(crud.id).subscribe();
  // }

  ///---------
  // showConfig() {
  //   this.service.getConfig().subscribe(resp => {
  //     const keys = resp.headers.keys();
  //     this.headers = keys.map(key => `${key}:${resp.headers.get(key)}`);
  //     this.userData = { ...resp.body };
  //     console.log("Data ::>", resp.body);
  //   });
  // }
}
