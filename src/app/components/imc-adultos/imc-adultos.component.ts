import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc-adultos',
  templateUrl: './imc-adultos.component.html',
  styleUrls: ['./imc-adultos.component.css']
})
export class IMCAdultosComponent {
  form!: FormGroup;
  imagenSeleccionada: string = 'mujer';
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

  calcularColorIMC(imc: number): { color: string, palabra: string } {
    let color = '';
    let palabra = '';
    // Por debajo de 18.5: Bajo peso.
    // Entre 18.5 y 24.9: Peso normal.
    // Entre 25 y 29.9: Sobrepeso.
    // Entre 30 y 34.9: Obesidad de grado 1.
    // Entre 35 y 39.9: Obesidad de grado 2.
    // 40 o más: Obesidad de grado 3 (obesidad mórbida).
    if (imc < 18.5) {
      color = '#70B9DA';
      palabra = 'Peso bajo';
    } else if (imc >= 18.5 && imc <=24.9) {
      color = '#72DA70';
      palabra = 'Peso normal';
    } else if (imc >= 25 && imc <=29.9) {
      color = '#E7AD56';
      palabra = 'Sobrepeso';
    } else if (imc >= 30 && imc <=34.9) {
      color = '#DEE05B';
      palabra = 'Obesidad de grado 1';
    }
    else if (imc >= 35 && imc <=34.9) {
      color = '#DA7070';
      palabra = 'Obesidad de grado 1';
    }
    else {
      color = '#484141';
      palabra = 'Obesidad mórbida';
    }
  
    return { color, palabra };
  }
  
}
