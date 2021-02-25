import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlatsComponent } from './flat/component/flats/flats.component';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';
import { AuthInterceptorService } from './core/services/auth-interceptor.service';
import { LogoutComponent } from './user/components/logout/logout.component';
import { FlatsCreateComponent } from './flat/component/flats-create/flats-create.component';
import { FlatsViewComponent } from './flat/component/flats-view/flats-view.component';
import { FlatsEditComponent } from './flat/component/flats-edit/flats-edit.component';
import { NavbarComponent } from './core/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    FlatsComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    FlatsCreateComponent,
    FlatsViewComponent,
    FlatsEditComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
