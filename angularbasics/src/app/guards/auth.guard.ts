import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
 let loginService= inject(LoginService)
 if(loginService.isAuthenticated())
 {
       return true;
 }else
 {
    return false;
 }
};
