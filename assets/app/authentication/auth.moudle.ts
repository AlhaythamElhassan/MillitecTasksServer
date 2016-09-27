import { NgModule }       from '@angular/core';
import {LoginComponent} from "./loginComponent/login.component";
import {CommonModule} from "@angular/common";
import {authRouting} from "./auth.routing";
import {AuthenticationComponent} from "./authenticationComponent/authenticaiton.component";
import {SignUpComponent} from "./signUpComponent/signup.component";
import {LogoutComponent} from "./logoutComponent/logout.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        authRouting,
    ],
    declarations: [
        AuthenticationComponent,
        LoginComponent,
        SignUpComponent,
        LogoutComponent
    ],
    providers:[

    ]
})
export class AuthMoudule{}