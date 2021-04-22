import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  
  heroes: string [] = [ 'Iroman', 'Doctor Strange', 'Black Panter',  'Jhon Wick', 'Thanos'];
  messages: string [] = [];

  add(messages: string){
    this.messages.push(messages);
  }

  Borrar(){
    var heroe= this.messages.push(this.heroes[0]);
    this.heroes.shift();
    return heroe;
  }
}
