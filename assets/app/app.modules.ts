/**
 * Angular 2 application entry point
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./headerComponent/header.componet";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}