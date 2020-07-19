import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PrivateguardGuard } from "./privateguard.guard";

const routes: Routes = [
  {
    path: "employee",
    component: EmployeeComponent,
    canActivate: [PrivateguardGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }

  // {
  //   path: 'business/create',
  //   component: GstAddComponent
  // },
  // {
  //   path: 'business/edit/:id',
  //   component: GstEditComponent
  // },
  // {
  //   path: 'business',
  //   component: GstGetComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
