import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./loginComponent/login.component";
import {AuthenticationComponent} from "./authenticationComponent/authenticaiton.component";


const authRoutes: Routes = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthenticationComponent,
        children: [
            {path: '',component: LoginComponent},
            {path: 'Login',component: LoginComponent}
        ]
    }
];

export const authRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);