import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserService } from "./user.service";
import { NoobintercepterService } from "./noobintercepter.service";
import { httpInterceptorProviders } from "./http-interceptors";
import { DataComponent } from "./data/data.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeComponent } from "./employee/employee.component";
import { AuthserService } from "./authser.service";
import { PrivateguardGuard } from "./privateguard.guard";
import { InterService } from "./inter.service";
import { EmpComponent } from './emp/emp.component';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    RegisterComponent,
    LoginComponent,
    EmployeeComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AuthserService,
    PrivateguardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
