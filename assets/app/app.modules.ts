/**
 * Angular 2 application entry point
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./headerComponent/header.componet";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {AuthenticationComponent} from "./authenticationComponent/authenticaiton.component";

@NgModule({
    imports:      [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        AuthenticationComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
        ],
    bootstrap: [AppComponent]
})
export class AppModule {}