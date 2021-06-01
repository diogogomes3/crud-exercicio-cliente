import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent {

  public formClient: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.formClient = this.formBuilder.group({
      name: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      email:[null, [Validators.required]],
      phone: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  signUp() {
    console.log(this.formClient.value)
  }





}
