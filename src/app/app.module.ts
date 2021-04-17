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

@NgModule({
  declarations: [
    AppComponent,
    CrearLibrosComponent,
    ListarLibrosComponent,
    LoginComponent,
    ModificarLibrosComponent,
    RegistroComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
