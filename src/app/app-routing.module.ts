import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewappComponent } from './newapp/newapp.component';
import {HomeappComponent} from './homeapp/homeapp.component';

const routes: Routes = [
  {'path': '', component: HomeappComponent},
  {'path': 'newapp', component: NewappComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
