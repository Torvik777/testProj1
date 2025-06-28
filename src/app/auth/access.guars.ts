import { CanActivateFn } from "@angular/router";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { inject } from "@angular/core";

export const canActivateAuth: CanActivateFn = () => {
    const isLoggedIn: boolean = inject(AuthService).isAuth;

    if(isLoggedIn) {
        return true;
    }

    return inject(Router).createUrlTree(['login']);
}