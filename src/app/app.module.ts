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
import { ProductDetailModule } from './mall/productDetail/productDetail.module';
import { CartSummaryComponent } from './mall/cartSummary/cartSummary.component';
import { CheckoutComponent } from './mall/checkout/checkout.component';
import { CartDetailComponent } from './mall/cartDetail/cartDetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, ModelModule, HomeModule, routing, NgbModule, ProductModule, ProductDetailModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, AppHeaderComponent, AppFooterComponent, CategoryProductsComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
