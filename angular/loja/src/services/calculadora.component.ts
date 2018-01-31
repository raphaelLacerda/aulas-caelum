
//decorator Component
import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService{

  calcular(n1 : number, n2 : number) : number {
    return n1 + n2;
  }
}