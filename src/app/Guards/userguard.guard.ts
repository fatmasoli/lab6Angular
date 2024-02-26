import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const userguardGuard: CanActivateFn = (route, state) => {
  const authServ=inject(AuthService)
  const router=inject(Router)

  if(authServ.isUserLogged){
    return true;
  }else{
    alert("login at first to access navigate")
    router.navigate(['/signup'])
    return false
  }
};
