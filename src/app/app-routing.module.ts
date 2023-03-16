import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewrequestComponent } from './pages/viewrequest/viewrequest.component';


const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'viewrequest', component:ViewrequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
