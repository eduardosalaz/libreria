import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {LibroService} from '../../services/libro.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-crear-libros',
  templateUrl: './crear-libros.component.html',
  styleUrls: ['./crear-libros.component.css']
})
export class CrearLibrosComponent implements OnInit {
  createLibro: FormGroup;
  submitted = false;
  loading = false;


  constructor(private formBuilder: FormBuilder, private libroService: LibroService, private router: Router, private toastr: ToastrService) {
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
    this.loading = true;
    if (this.createLibro.invalid){
      console.log('pichla ');
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
        this.toastr.success('Libro creado', 'Éxito', {
          positionClass: 'toast-bottom-center'
        });
        this.loading = false;
        this.router.navigate(['/listar']);
      }).catch(error => {
        this.loading = false;
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
