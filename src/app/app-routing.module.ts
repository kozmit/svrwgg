import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { BlogComponent } from './blog/blog.component';

import { KaderComponent } from './kader/kader.component';

import { TermineComponent } from './termine/termine.component';


const router: Routes = [

  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent},

  { path: 'blog', component: BlogComponent },

  { path: 'kader', component: KaderComponent },

  { path: 'termine', component: TermineComponent },

];


@NgModule({
  imports: [ RouterModule.forRoot(router) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
