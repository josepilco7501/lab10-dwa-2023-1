import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  formulario: FormGroup;
  nombre: string = ''
  correo: string = ''
 
  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  } 
  
  confirmarEnvio() {
    if (confirm('Estas seguro de enviar el formulario?')) {
      this.onSubmit();
    }
  }

  onSubmit() {
    //logica para enviar los datos del formulario
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`)
    console.log(`Correo: ${this.correo}`)
    if (this.formulario.valid) {
      window.alert('Formulario enviado correctamente');
      // Abrir una nueva ventana con los datos enviados
    const datosEnviados = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <div style="margin:20px";>
      <h2>Datos Enviados</h2>
      <form>
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input value = "${this.nombre}" type="text" class="form-control" disabled>
        </div>
        <div class="mb-3">
          <label class="form-label">Correo</label>
          <input type="text" value="${this.correo}" class="form-control" disabled>
        </div>
        <a class="btn btn-primary" href="http://localhost:4200/">Volver</a>
      </form>
    </div>
    `;
    const nuevaVentana = window.open('', '_blank');
    nuevaVentana!.document.body.innerHTML = datosEnviados;
      //this.formulario.reset();
    }
  }
}
