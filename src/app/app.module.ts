import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, PreloadAllModules} from '@angular/router';

import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {HeaderComponent} from './common/components/header/header.component';
import {FooterComponent} from './common/components/footer/footer.component';
import {CourseDetailComponent} from './home/course-detail/course-detail.component';
import {LoginMenuComponent} from './common/components/login-menu/login-menu.component';
import {MenuComponent} from './common/components/menu/menu.component';
import {SearchComponent} from './common/components/search/search.component';
import {HomeComponent} from './home/home.component';
import {ROUTES} from "./app.routes";
import {NoContentComponent} from "./no-content/no-content.component";
import {CourseDeleteConfirmationComponent} from './home/course-delete-confirmation/course-delete-confirmation.component';
import {AuthorizationService} from "./common/services/authorization.service";
import {LoginComponent} from './login/login.component';
import {OverlayComponent} from './common/components/overlay/overlay.component';
import {OverlayService} from "./common/components/overlay/overlay-service/overlay-service.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CourseDetailComponent,
    LoginMenuComponent,
    MenuComponent,
    SearchComponent,
    HomeComponent,
    NoContentComponent,
    CourseDeleteConfirmationComponent,
    LoginComponent,
    OverlayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    MaterialModule
  ],
  providers: [
    AuthorizationService,
    OverlayService
  ],
  bootstrap: [AppComponent],
  entryComponents: [CourseDeleteConfirmationComponent]
})
export class AppModule {
}
