import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { CreateViewComponent } from './views/create-view/create-view.component';
import { ListViewComponent } from './views/list-view/list-view.component';


const routes: Routes = [
  {
    path: '',
    component: ListViewComponent
  },
  {
    path: 'list',
    component: ListViewComponent
  }, {
    path: 'create',
    component: CreateViewComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
