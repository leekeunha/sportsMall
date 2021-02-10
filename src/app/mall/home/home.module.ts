import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBanner } from './carouselBanner.component';
import { NgbdCarouselLatest } from './carouselLatest.component';

@NgModule({
    imports: [BrowserModule, NgbModule],
    declarations: [HomeComponent, NgbdCarouselBanner, NgbdCarouselLatest],
    exports: [HomeComponent]
})
export class HomeModule { }