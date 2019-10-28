import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PublicationComponent } from './home/publication/publication.component';
import { CommentComponent } from './home/comment/comment.component';
import { IndexComponent } from './index/index.component';
import { AlwaysAuthGuard } from './guards/AlwaysAuthGuard';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
const routes: Routes = [
  {path: 'home' , component: HomeComponent ,
  children: [
    {path: 'publication' , component : PublicationComponent},
    {path: 'comment' , component : CommentComponent}
  ]
  },
  {path: 'index' , component: IndexComponent , canActivate: [AlwaysAuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicationComponent,
    CommentComponent,
    IndexComponent
  ],
  imports: [
  BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AlwaysAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
