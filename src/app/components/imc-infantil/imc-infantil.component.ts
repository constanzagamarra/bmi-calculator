import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc-infantil',
  templateUrl: './imc-infantil.component.html',
  styleUrls: ['./imc-infantil.component.css']
})
export class IMCInfantilComponent {
  form!: FormGroup;
  imagenSeleccionada: string | undefined;

  seleccionarImagen(genero: string) {
    this.imagenSeleccionada = genero;
  }
  constructor(
    private formBuilder: FormBuilder,

  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      genero: ['', [Validators.required, Validators.pattern("^[1-9][0-9]*$")]],
      edad: ['', [Validators.required, Validators.pattern("^[1-9][0-9]*$")]],
      peso: ['', [Validators.required, Validators.pattern("^[1-9][0-9]*$")]],
      altura:['', [Validators.required, Validators.pattern("^[1-9][0-9]*$")]]
    });
  }
}
