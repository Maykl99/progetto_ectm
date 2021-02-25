import { FlatsEditComponent } from './flat/component/flats-edit/flats-edit.component';
import { FlatsViewComponent } from './flat/component/flats-view/flats-view.component';
import { LogoutComponent } from './user/components/logout/logout.component';
import { LoginComponent } from './user/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user/components/register/register.component';
import { FlatsComponent } from './flat/component/flats/flats.component';
import { AuthGuard } from './core/guards/auth.guard';
import { FlatsCreateComponent } from './flat/component/flats-create/flats-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'flats', component: FlatsComponent, canActivate: [AuthGuard] },
  { path: 'flats/create', component: FlatsCreateComponent, canActivate: [AuthGuard] },
  { path: 'flats/:flatId', component: FlatsViewComponent, canActivate: [AuthGuard] },
  { path: 'flats/:flatId/edit', component: FlatsEditComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/flats', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
