import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

import { HeroesService, Heroe }     from '../../services/heroes.service';
import { FoodService,  Food }         from '../../services/food.service';

const CASA_DC:string="DC";
const CASA_MARVEL:string="Marvel";
@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html'
  //styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {


  DC:boolean=false;

  food:Food={
    nombre: "American Burger style",
    category:"FastFood",
    description: "La clásica Hamburguesa Americana, para comersela a 2 manos",
    img: "assets/img/food/burger.jpg",
    price: "5"
    
  }

  heroe:Heroe = {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
  };

  constructor( private _activateRoute:ActivatedRoute,
              private _heroeService:HeroesService,
              private _foodService:FoodService
              ) {
    this._activateRoute.params.subscribe( params_in =>{
              
              // console.log(params_in);             
              //console.log(params_in['IDX']); // no existe este parámetro, dará error undefined
              console.log(params_in['id']); //{ path: 'heroe/:id', component: HeroeDetailComponent }, buscamos id parameter en la ruta

              this.heroe = this._heroeService.getHeroe(params_in['id']);
              console.log(this.heroe);

              console.log(this.heroe.casa);
              console.log(CASA_MARVEL);

              if(this.heroe.casa==CASA_MARVEL){
                   this.DC=false;
                 
              }else{
                this.DC=true;
              }
              console.log(this.DC);

              this.food = this._foodService.getFood(params_in['id']);
              console.log(this.food);
          });
   }

  ngOnInit(): void {
  }

}
