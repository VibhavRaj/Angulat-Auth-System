import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"]
})
export class DataComponent implements OnInit {
  public items;
  private url = "http://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getdata();
  }

  getdata() {
    return this.http.get(this.url).subscribe(data => {
      this.items = data;
      console.log(data);
    });
  }
}
