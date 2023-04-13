import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './main/body/body.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: BodyComponent },
  {
    path: 'saiba-mais',
    loadChildren: () => import('./saiba-mais/saiba-mais.module').then(m => m.SaibaMaisModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
