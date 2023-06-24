import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc-adultos',
  templateUrl: './imc-adultos.component.html',
  styleUrls: ['./imc-adultos.component.css']
})
export class IMCAdultosComponent {
  form!: FormGroup;
  imagenSeleccionada: string | undefined;
  imc: number=0;

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


  
  calcularIMC() {
    const peso = this.form.get('peso')?.value;
    const altura = this.form.get('altura')?.value;
  
    if (peso && altura) {
    const alturaMetros = altura / 100;  
      this.imc = peso / ((alturaMetros * alturaMetros)); 
    }
  }
  
}
