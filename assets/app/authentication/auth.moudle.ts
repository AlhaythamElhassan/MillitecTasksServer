import { NgModule }       from '@angular/core';
import {LoginComponent} from "./loginComponent/login.component";
import {CommonModule} from "@angular/common";
import {authRouting} from "./auth.routing";
import {AuthenticationComponent} from "./authenticationComponent/authenticaiton.component";

@NgModule({
    imports: [
        CommonModule,
        authRouting,
    ],
    declarations: [
        AuthenticationComponent,
        LoginComponent
    ],
    providers:[

    ]
})
export class AuthMoudule{}