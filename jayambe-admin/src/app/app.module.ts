import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UsersComponent } from './users/users.component';
import { MessageComponent } from './message/message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageService }  from './services/message.service';
import {HttpErrorHandler} from './services/http-error-handler.service'
import { from } from 'rxjs';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layout/backend-layout/backend-layout.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UsersComponent,
    MessageComponent,
    PageNotFoundComponent,
    DefaultLayoutComponent,
    BackendLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    MessageService,
    HttpErrorHandler
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
