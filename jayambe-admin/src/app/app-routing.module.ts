import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { BACKEND_LAYOUT } from './routes/backend-layout-routes';
import { DEFAULT_ROUTES } from './routes/default-layout-routes';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layout/backend-layout/backend-layout.component';

const routes: Routes = [
  { path: '', component: DefaultLayoutComponent, children: DEFAULT_ROUTES },
  { path: 'backend', component: BackendLayoutComponent, children: BACKEND_LAYOUT },
  { path: '**', redirectTo: '404' },
  // {
  //    path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  // {
  //    path: 'users',
  //    component: UsersComponent
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // },
  // {
  //   path: 'dashboard',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
