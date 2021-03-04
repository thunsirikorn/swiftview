import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { SearchbarComponent } from './searchbar/searchbar.component'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbannerComponent,
    HomeComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
