import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthserService } from "../authser.service";
import { EmpService } from "../emp.service";
import { Employee } from "../crudmodel";

@Component({
  selector: "app-emp",
  templateUrl: "./emp.component.html",
  styleUrls: ["./emp.component.css"]
})
export class EmpComponent implements OnInit {
  addForm: FormGroup;
  employee: Employee[];
  getiddata;
  constructor(private service: EmpService, private fb: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      email: ["", Validators.required],
      note: ["", Validators.required]
    });
    this.getallemp();
  }
  //get all data
  getallemp() {
    this.service.getAllProducts().subscribe(res => (this.employee = res));
  }
  //get data by id
  getid(e: Employee) {
    this.service.getProductById(e.id).subscribe(
      data => (this.getiddata = data),
      err => console.log(err)
    );
  }
  //data bind form addform
  pop(e: Employee) {
    this.addForm.setValue(e);
  }
  //delete
  deleteemp(e: Employee) {
    this.service.deleteProduct(e.id).subscribe(data => {
      console.log(data);
      this.getallemp();
    });
  }
  //onsubmit
  save() {
    if (this.addForm.value.id != "") {
      this.update();
      console.log("Update");
    } else {
      this.addEmp();
      console.log("New user");
    }
  }
  //add
  addEmp() {
    this.service.addProduct(this.addForm.value).subscribe(data => {
      console.log(data), this.getallemp();
    });
  }
  //update
  update() {
    this.service.updateProduct(this.addForm.value).subscribe(data => {
      console.log(data);
      this.addForm.patchValue(data);
      this.getallemp();
    });
  }
}
