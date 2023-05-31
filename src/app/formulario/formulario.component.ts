import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  formulario: FormGroup;


  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  } 
  

  onSubmit() {
    console.log('Formulario enviado');
    if (this.formulario.valid) {
      if (window.confirm('¿Estás seguro de enviar el formulario?')) {
        window.alert('Formulario enviado correctamente');
        this.formulario.reset();
      }
    }
  }
}
