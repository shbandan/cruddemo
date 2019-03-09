
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  {path : '', component : ListUserComponent}
];

export const routing = RouterModule.forRoot(routes);