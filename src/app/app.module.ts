import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { KaderComponent } from './kader/kader.component';
import { BlogComponent } from './blog/blog.component';
import { TermineComponent } from './termine/termine.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { SlideshowModule } from 'ng-simple-slideshow';
import { ImpressumComponent } from './impressum/impressum.component';


@NgModule({
  declarations: [
    AppComponent,
    KaderComponent,
    BlogComponent,
    TermineComponent,
    HomeComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    SlideshowModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
