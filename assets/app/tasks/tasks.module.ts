import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {tasksRouting} from "./tasks.routing";
import {TaskComponent} from "./taskComponent/task.component";
@NgModule({
    imports: [
        CommonModule,
        tasksRouting
    ],
    declarations:[
        TaskComponent
    ],
    providers: []

})
export class TasksModule {}