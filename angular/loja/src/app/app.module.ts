
//obrigatório para qualquer aplicação web
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//@NgModule é um decorator

@NgModule({
  //declarations − In declarations, the reference to the components is stored. The Appcomponent is the default component that is created whenever a new project is initiated. We will learn about creating new components in a different section.
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, FormsModule],

  //providers − This will have reference to the services created. The service will be discussed in a subsequent chapter.
  providers: [],

  //qual é o componente que deve ser o Inicial?
  bootstrap: [AppComponent]
})


//os componentes exportardos podem ser usados em outros módulos
export class AppModule {}
