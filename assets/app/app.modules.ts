/**
 * Angular 2 application entry point
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./headerComponent/header.componet";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {routing} from "./app.routing";
import {TaskComponent} from "./tasks/taskComponent/task.component";
import {AuthMoudule} from "./authentication/auth.moudle";


@NgModule({
    imports:      [
        BrowserModule,
        routing,
        AuthMoudule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        TaskComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
        ],
    bootstrap: [AppComponent]
})
export class AppModule {}