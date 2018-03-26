
//decorator Component
import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService{

  public somar(n1 : number, n2 : number) : number {

    if((!n1) || (!n2)){

      throw new Error('PARÂMETROS INVÁLIDOS');
    }
    return n1 + n2;
  }
}