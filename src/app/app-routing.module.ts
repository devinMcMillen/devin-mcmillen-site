import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DataStructuresComponent } from './pages/data-structures/data-structures.component';
import { AlgorithmsComponent } from './pages/algorithms/algorithms.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';


const routes: Routes = [
  {path: 'about-me', component: AboutMeComponent},
  {path: '', component: HomePageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'data-structures', component: DataStructuresComponent},
  {path: 'algorithms', component: AlgorithmsComponent},
  {path: 'coming-soon', component: ComingSoonComponent},

  {path: '**', component: ErrorNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
