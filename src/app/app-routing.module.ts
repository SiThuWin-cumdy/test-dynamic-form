import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRenderComponent } from './pages/form-render/form-render.component';

const routes: Routes = [
  {
    path: '',
    component: FormRenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
