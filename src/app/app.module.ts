import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './compo/user/user.component';
import {RouterOutlet} from "@angular/router";
import { UserListComponent } from './compo/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
