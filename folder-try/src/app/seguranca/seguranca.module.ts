import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDicasComponent } from './lista-dicas/lista-dicas.component';



@NgModule({
  declarations: [ListaDicasComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListaDicasComponent
  ]
})
export class SegurancaModule { }
