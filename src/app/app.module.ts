import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './mall/home/home.module';
import { ModelModule } from './models/model.module';
import { routing } from './app.routing';
import { AppHeaderComponent } from './mall/appheader/appHeader.component';
import { AppFooterComponent } from './mall/appfooter/appFooter.component';

@NgModule({
    imports: [BrowserModule, ModelModule, HomeModule, routing],
    declarations: [AppComponent, AppHeaderComponent, AppFooterComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
