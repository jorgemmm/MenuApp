import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { FoodService,Food } from '../../services/food.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
  //styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  feet:Food[]=[];

  constructor(private _heroesService:HeroesService,
              private _foodService:FoodService,
              private  _router:Router
                ){
    //  console.log("constructor");     

 }

  ngOnInit(): void {
    // Metdo que se utiliza cuando la page está rendrizada
    //console.log("ngOnInit");
    this.heroes=this._heroesService.getHeroes();

    this.feet=this._foodService.getFeet();

    //console.log(this.heroes);
    console.log(this.feet);
  }

  verHeroe(idx:number){
       // console.log("evento output recibido por componente padre");
        // console.log(idx);
        this._router.navigate(['heroe',idx]);

        //desde search component
  }

  
  verFood(idx:number){
    // console.log("evento output recibido por componente padre");
     // console.log(idx);
     this._router.navigate(['heroe',idx]);

     //desde search component
}

}
