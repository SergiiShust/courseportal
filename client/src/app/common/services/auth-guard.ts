import {Injectable}     from '@angular/core';
import {CanActivate}    from '@angular/router';
import {Store} from "@ngrx/store";
import * as fromRoot from "../../redux/reducers" ;

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromRoot.State>) {
  }

  canActivate() {
    return this.store.select(fromRoot.getLoginIsAuthenticated);
  }
}
