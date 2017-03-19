import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CourseDetailComponent } from './home/course-detail/course-detail.component';
import { LoginComponent } from './common/login/login.component';
import { MenuComponent } from './common/menu/menu.component';
import { SearchComponent } from './common/search/search.component';
import { HomeComponent } from './home/home.component';
import {ROUTES} from "./app.routes";
import {NoContentComponent} from "./no-content/no-content.component";
import { CourseDeleteConfirmationComponent } from './home/course-delete-confirmation/course-delete-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CourseDetailComponent,
    LoginComponent,
    MenuComponent,
    SearchComponent,
    HomeComponent,
    NoContentComponent,
    CourseDeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CourseDeleteConfirmationComponent]
})
export class AppModule {
}
