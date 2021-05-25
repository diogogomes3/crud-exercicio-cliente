import { AppComponent } from "./app.component";
import { Router, RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from "./cadastro-cliente/cadastro-cliente.component";
import { NgModule } from "@angular/core";


var rotas: Routes = [
  {
     path: "", 
component: CadastroClienteComponent
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {}