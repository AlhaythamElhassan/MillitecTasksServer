import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {TaskComponent} from "./taskComponent/task.component";
const tasksRoutes: Routes = [
    {
        path: 'task',
        component: TaskComponent
    }
];

export const tasksRouting: ModuleWithProviders = RouterModule.forChild(tasksRoutes);