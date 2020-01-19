import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGitDetailsComponent } from './components/user-git-details/user-git-details.component';


const routes: Routes = [
  { path: '', component: UserGitDetailsComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
