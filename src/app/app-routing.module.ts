import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListeArticlesComponent } from './pages/liste-articles/liste-articles.component';
import { AgendaComponent } from './sidebar/agenda/agenda.component';
import { BlocNoteComponent } from './sidebar/bloc-note/bloc-note.component';

const routes: Routes = [
  {
    path: 'liste-articles',
    component: ListeArticlesComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'agenda',
    component: AgendaComponent,
    outlet: 'sidebar',
  },
  {
    path: 'bloc-note',
    component: BlocNoteComponent,
    outlet: 'sidebar',
  },
  {
    path: '',
    redirectTo: 'liste-articles',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
