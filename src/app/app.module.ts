import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListeArticlesComponent } from './pages/liste-articles/liste-articles.component';
import { AgendaComponent } from './sidebar/agenda/agenda.component';
import { BlocNoteComponent } from './sidebar/bloc-note/bloc-note.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListeArticlesComponent,
    AgendaComponent,
    BlocNoteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
