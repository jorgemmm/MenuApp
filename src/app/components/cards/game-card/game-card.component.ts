import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html'
 
})
export class GameCardComponent  {

//Convierte a heroe en una vable-property de entrada desde el componente padre (heroes-component)
@Input()  game:any={};  // coloca [heroe] en componente padre para recibir data
@Input()  index:number;

@Output() gameSeleccionado: EventEmitter<number>;


  constructor(private  _router:Router) {
    this.gameSeleccionado=new EventEmitter();
   }

   verGameEvent(){    
      
      //console.log(this.index);
      this._router.navigate(['heroe',this.index]);

      //this.heroeSeleccionado.emit( this.index);
      //console.log("evento emitido desde el hijo");
  }

}
