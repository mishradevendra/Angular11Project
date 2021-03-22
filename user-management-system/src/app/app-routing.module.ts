import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SortDateComponent } from './sort-date/sort-date.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path : 'users', component: UserListComponent},
  { path : 'create-user', component: CreateUserComponent},
  {path : '', redirectTo : 'users', pathMatch : 'full'},
  {path : 'update-user/:id',component: UpdateUserComponent},
  {path : 'user-details/:id',component:UserDetailsComponent},
  {path : 'userName', component: SearchUserComponent},
  {path : 'userjoindate',component: SortDateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
