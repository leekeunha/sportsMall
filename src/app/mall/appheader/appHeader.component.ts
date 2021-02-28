import { Component } from '@angular/core';
import { Cart } from '../../models/cart.model';

@Component({
    selector: 'app-header',
    templateUrl: './appHeader.component.html',
    styleUrls: ['./appHeader.component.css']
})
export class AppHeaderComponent {
    constructor(public cart: Cart) {
        debugger;
    }
}
