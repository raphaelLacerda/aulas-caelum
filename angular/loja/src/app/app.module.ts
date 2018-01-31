
//obrigatório para qualquer aplicação web
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//@NgModule é um decorator

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [],

  //qual é o componente que deve ser o Inicial?
  bootstrap: [AppComponent]
})


//os componentes exportardos podem ser usados em outros módulos
export class AppModule {}
