import { Component } from "@angular/core";
import { OrderRepository } from '../../models/orderRepositoy.model';
import { Order } from '../../models/order.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: "checkout",
    templateUrl: "./checkout.component.html"
})
export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public repository: OrderRepository, public order: Order) {
        debugger;
    }

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}