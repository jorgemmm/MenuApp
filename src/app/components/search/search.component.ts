import { Component, OnInit} from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { FoodService,  Food }         from '../../services/food.service';

import { ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
  // styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:any={};
  termino:string;
  feet:any={};
  termino2:string;
 

  constructor(private _activateRoute:ActivatedRoute,
              private _heroeService:HeroesService,
              private _foodService:FoodService,

              private  _router:Router              
                  ) { 
                    

                    this._activateRoute.params.subscribe( params_in =>{
                      // console.log(params_in);
                      // console.log(params_in['termino']);
                     // this.termino=params_in['termino'];
                      this.heroes=this._heroeService.buscarHeroe(params_in['termino']);
                      console.log(this.heroes);
                      
                      this.feet=this._foodService.buscarFood(params_in['termino2']);
                      console.log(this.feet);

                    });

                    

                  }

  ngOnInit(): void {



  }

  verHeroe(idx:number){

    // console.log(idx);
    // this._router.navigate(['heroe',idx]);

    //desde search component
}
verFood(idx:number){

  // console.log(idx);
  // this._router.navigate(['heroe',idx]);

  //desde search component
}
  //Colocado en Search.components
  // verHeroe( nombre:string   ){
        
  //        console.log(nombre);
  //       let  idx:number  =  this._heroeService.getHeroeId(nombre);
  //       console.log(idx);
  //       this._router.navigate(['heroe',  idx  ]);
        
  // }

}
