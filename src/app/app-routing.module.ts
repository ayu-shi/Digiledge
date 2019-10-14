import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddThiefComponent } from './add-thief/add-thief.component';
import { GetThiefComponent } from './get-thief/get-thief.component';
import { UpdateDeleteThiefComponent } from './update-delete-thief/update-delete-thief.component';
import { ThiefEditComponent } from './thief-edit/thief-edit.component';

const routes: Routes = [
  {
    path: 'thief/create',
    component: AddThiefComponent
  },
  {
    path: 'thief/edit/:id',
    component: ThiefEditComponent
  },
  {
    path: 'thief',
    component: UpdateDeleteThiefComponent
  },
  {
    path: 'thief/get',
    component: GetThiefComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }