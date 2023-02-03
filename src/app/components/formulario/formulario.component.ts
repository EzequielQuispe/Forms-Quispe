import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(){
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let controles: any = {
      email: new FormControl('', [Validators.required, Validators.pattern(regexCorreo)]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
      recordarCredenciales: new FormControl(true)
    }
    this.formulario = new FormGroup(controles);
  }

  login(){
    console.log(this.formulario);
  }
}