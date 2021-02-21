import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './mall/home/home.module';
import { ModelModule } from './models/model.module';
import { routing } from './app.routing';
import { AppHeaderComponent } from './mall/appheader/appHeader.component';
import { AppFooterComponent } from './mall/appfooter/appFooter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModule } from './mall/product/product.module';
import { CounterDirective } from './directives/counter.directive';
import { CategoryProductsComponent } from './mall/categoryProducts/CategoryProducts.componenet';

@NgModule({
    imports: [BrowserModule, ModelModule, HomeModule, routing, NgbModule, ProductModule],
    declarations: [AppComponent, AppHeaderComponent, AppFooterComponent, CategoryProductsComponent, CounterDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }
