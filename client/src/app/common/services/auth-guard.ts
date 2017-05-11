import {Injectable}     from '@angular/core';
import {CanActivate}    from '@angular/router';
import {AuthorizationService} from "./authorization.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authorizationService: AuthorizationService){}

  canActivate() {
    return this.authorizationService.isAuthenticated();
  }
}
