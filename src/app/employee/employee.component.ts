import { Component, OnInit, Input } from "@angular/core";
import { AuthserService } from "../authser.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Employee } from "../crudmodel";
@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  // @Input() label: string;
  // @Input() functionCall: string;
  employee: Employee[];
  newemp: Employee;
  articleIdToUpdate = null;
  constructor(
    private formBuilder: FormBuilder,
    private _auth: AuthserService
  ) {}
  addForm: FormGroup;
  ngOnInit() {
    this.usergetemp();
    this.addempdata();
  }
  usergetemp() {
    this._auth.getEmp().subscribe(
      res => (this.employee = res),
      err => {
        console.log(err);
      }
    );
  }

  addempdata() {
    this.addForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      note: ["", Validators.required]
    });
  }

  onsubmit() {
    this._auth.addEmp(this.addForm.value).subscribe(data => {
      console.log(data);
      this.usergetemp();
    });
  }
  up() {
    if (this.addForm.value.id != null) {
      console.log("Done update ");
      //this.update();
    } else {
      console.log("Done submit");
      this.onsubmit();
    }
  }
  pop(e: Employee) {
    //this.newemp = Object.assign({}, e);
    this.addForm.patchValue(e);
    // if (e.id != null) {
    //   //return console.log(e.id)
    //   this.update();
    // }
  }
  update() {
    this._auth.updateEmp(this.addForm.value).subscribe(data => {
      console.log("fmwlefml", this.addForm.value.id);
      this.addForm.setValue(data);
    });
  }
  deleteemp(e: Employee) {
    this.employee = this.employee.filter(h => h !== e);
    this._auth.deleteEmp(e.id).subscribe();
  }
}
