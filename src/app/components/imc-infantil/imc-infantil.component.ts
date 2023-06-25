import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc-infantil',
  templateUrl: './imc-infantil.component.html',
  styleUrls: ['./imc-infantil.component.css']
})
export class IMCInfantilComponent {
  form!: FormGroup;
  imagenSeleccionada: string = 'mujer';
  imc: number= 0;

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
  
    if (imc < 5) {
      color = '#70B9DA';
      palabra = 'Peso bajo';
    } else if (imc >= 5 && imc <= 85){
      color = '#72DA70';
      palabra = 'Peso normal';
    } else if (imc >= 85 && imc <=95) {
      color = '#E7AD56';
      palabra = 'Sobrepeso';
    } else {
      color = '#DA7070';
      palabra = 'Obesidad';
    }
  
    return { color, palabra };
  }
  
}

