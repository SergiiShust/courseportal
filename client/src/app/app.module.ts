import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';
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
import {CourseFreshDirective} from "./home/directives/course-fresh.directive";
import {OrderByPipe} from './common/pipes/order-by.pipe';
import {FilterByPipe} from "./common/pipes/filter-by.pipe";
import {AddCourseComponent} from './add-course/add-course.component';
import {DurationPipe} from "./common/pipes/duration.pipe";
import {AuthorizedHttpService} from "./common/services/authorize-http.service";

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
    CourseFreshDirective,
    DurationPipe,
    OrderByPipe,
    FilterByPipe,
    AddCourseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthorizationService,
    OverlayService,
    {
      provide: AuthorizedHttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new AuthorizedHttpService(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CourseDeleteConfirmationComponent]
})
export class AppModule {
}
