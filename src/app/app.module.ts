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
import { ProductDetailModule } from './mall/productDetail/productDetail.module';
import { CartSummaryComponent } from './mall/cartSummary/cartSummary.component';
import { CheckoutComponent } from './mall/checkout/checkout.component';
import { CartDetailComponent } from './mall/cartDetail/cartDetail.component';
import { FormsModule} from '@angular/forms';
import { CategoryProductsComponent } from './mall/categoryProducts/categoryProducts.component';

@NgModule({
    imports: [BrowserModule, ModelModule, HomeModule, routing, NgbModule, ProductModule, ProductDetailModule, FormsModule],
    declarations: [AppComponent, AppHeaderComponent, AppFooterComponent, CategoryProductsComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
