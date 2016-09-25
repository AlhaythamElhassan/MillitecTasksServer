import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from "./authenticationComponent/authenticaiton.component";



const appRoutes: Routes = [
    {
        path: '',
        component: AuthenticationComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
