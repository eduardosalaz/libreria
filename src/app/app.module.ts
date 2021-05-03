import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearLibrosComponent } from './components/crear-libros/crear-libros.component';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';
import { LoginComponent } from './components/login/login.component';
import { ModificarLibrosComponent } from './components/modificar-libros/modificar-libros.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'listar', component: ListarLibrosComponent},
  {path: 'crear', component: CrearLibrosComponent},
  {path: 'modificar', component: ModificarLibrosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: 'lista', pathMatch: 'full'}
];



@NgModule({
  declarations: [
    AppComponent,
    CrearLibrosComponent,
    ListarLibrosComponent,
    LoginComponent,
    ModificarLibrosComponent,
    RegistroComponent,
    NavbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
