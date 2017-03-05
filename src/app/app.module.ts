import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CourseDetailComponent } from './shared/course-detail/course-detail.component';
import { LoginComponent } from './shared/login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SearchComponent } from './shared/search/search.component';
import { HomeComponent } from './home/home.component';
import {ROUTES} from "./app.routes";
import {NoContentComponent} from "./no-content/no-content.component";

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
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
