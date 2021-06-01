import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {LibroService} from '../../services/libro.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-crear-libros',
  templateUrl: './crear-libros.component.html',
  styleUrls: ['./crear-libros.component.css']
})
export class CrearLibrosComponent implements OnInit {
  createLibro: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private libroService: LibroService, private router: Router) {
    this.createLibro = this.formBuilder.group({
      ISBN: ['', [Validators.required, Validators.pattern('^[0-9-]*$')]],
      Genero: ['', Validators.required],
      Autor: ['', Validators.required],
      Titulo: ['', Validators.required],
      Editorial: ['', Validators.required],
      Precio: ['', Validators.required, Validators.pattern('^[0-9.,]*$')]
    });
  }

  ngOnInit(): void {
  }

  crear(): void {
    this.submitted = true;
    if (this.createLibro.invalid){
      return;
    }else {
      const Libro: any = {
        ISBN: this.createLibro.value.ISBN,
        Genero: this.createLibro.value.Genero,
        Autor: this.createLibro.value.Autor,
        Titulo: this.createLibro.value.Titulo,
        Editorial: this.createLibro.value.Editorial,
        Precio: this.createLibro.value.Precio,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
      };
      this.libroService.agregarLibro(Libro).then(() => {
        console.log('Libro registrado con exito');
        this.router.navigate(['/listar']);
      }).catch(error => {
        console.log(error);
      });
      console.log(Libro.isbn);
      return;
    }
  }
  /*
  get createLibroControl(){
    return this.
  }*/

}
