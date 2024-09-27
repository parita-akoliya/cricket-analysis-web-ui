import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppIndexComponent } from './app-index/app-index.component';
import { AppAnalyserComponent } from './app-analyser/app-analyser.component';


const routes: Routes = [
  { path: 'home', component: AppIndexComponent },
  { path: 'analyse', component: AppAnalyserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
