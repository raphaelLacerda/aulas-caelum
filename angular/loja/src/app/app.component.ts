//decorator Component
import { Component } from "@angular/core";
import { CalculadoraService } from "../services/calculadora.component";

//decorator usado para declarar a classe AppComponent como um Component
@Component({
  //custom html-tag
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],

  //componentes injetados
  providers: [CalculadoraService]
})

//The export keyword is used so that the component can be used in other modules in the Angular JS application.
export class AppComponent {
  constructor(private calculadora: CalculadoraService) {}
  ngOnInit(): void {
    this.idade = this.calculadora.calcular(14, 20);
  }
  //pode ter propriedades e métodos
  title = "app Raphael Lacerda";
  tempoPerdido: string = "Perdi um puta tempo por causa de bug";
  msg: string;
  idade: number;
  nome: String;
  newdate = new Date();
  appList: any[] = [
    {
      ID: "1",
      Name: "One"
    },

    {
      ID: "2",
      Name: "Two"
    }
  ];

  public gravar() : void {

    this.msg = this.nome + ' gravado com sucesso';
    this.nome = '';
  }
}
