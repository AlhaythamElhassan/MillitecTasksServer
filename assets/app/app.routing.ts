import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskComponent} from "./tasks/taskComponent/task.component";

const appRoutes: Routes = [
    {
        path: 'task',
        component: TaskComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
