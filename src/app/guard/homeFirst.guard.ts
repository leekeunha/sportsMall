import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HomeComponent } from '../mall/home/home.component';

@Injectable()
export class HomeFirstGuard {
    private firstNavation = true;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.firstNavation) {
            this.firstNavation = false;

            if (route.component != HomeComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}