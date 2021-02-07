import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }