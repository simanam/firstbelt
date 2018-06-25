import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component'
import{EditAuthorComponent} from './edit-author/edit-author.component'
import{NewAuthorComponent} from './new-author/new-author.component'
import{BakerComponent} from './baker/baker.component'

const routes: Routes = [
    {path: 'pets', component:HomeComponent},
    {path: 'pets/new', component:NewAuthorComponent},
    {path: 'pets/:id/edit', component: EditAuthorComponent},
    {path: 'pets/:id', component: BakerComponent},
    { path: '', pathMatch: 'full', redirectTo: 'pets' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }