import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html'
  
})
export class FoodCardComponent  {


//Convierte a heroe en una vable-property de entrada desde el componente padre (heroes-component)
@Input()  food:any={};  // coloca [heroe] en componente padre para recibir data
@Input()  index:number;

@Output() FoodSeleccionado: EventEmitter<number>;

  

constructor(private  _router:Router) {
  this.FoodSeleccionado=new EventEmitter();
 }

 verFoodEvent(){    
    
    //console.log(this.index);
    this._router.navigate(['heroe',this.index]);

    //this.heroeSeleccionado.emit( this.index);
    //console.log("evento emitido desde el hijo");
}


}
