import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  private feet:Food[]=[
    {
      nombre: "American Burger style",
      category:"FAST",
      description: "La clásica Hamburguesa Americana, para comersela a 2 manos",
      img: "assets/img/food/burger.jpg",
      price: "5"
      
    },
    {
      nombre: "Mexican Taco",
      category:"FAST",
      description: "Tacos al estilo mejicano, picantitos y crujientes",
      img: "assets/img/food/taco.jpg",
       price: "5"
    },
    {
      nombre: "Chicken",
      category:"HEALTH",
      description: "Solo un pollo al horno, aliméntate como es debido",
      img: "assets/img/food/chicken.jpg",     
      price: "10",
     
    },
    {
      nombre: "Beefsteak",
      category:"HEALTH",
      description: "La mejor carne de ternera a la parrilla",
      img: "assets/img/food/beef.jpg",
      price: "15",
     
    },
    {
      nombre: "Pizza",
      category:"FAST",
      description: "Pizza fina al con verdadera mozzarela",
      img: "assets/img/food/pizza.jpg",
      price: "10",
     
    },
    {
      nombre: "Salad",
      category:"HEALTH",
      description: "Para un estilo de vida saludable",
      img: "assets/img/food/salad.jpg",
      price: "12",
     
    },
    {
      nombre: "Coke",
      category:"DRINK",
      description: "El elixir de la vida",
      img: "assets/img/food/coke.jpg",
      price: "1.5",
     
    },
    {
      nombre: "Beer",
      category:"DRINK",
      description: "Para verlo todo más fácil",
      img: "assets/img/food/beer.jpg",
      price: "1.5",
     
    }
    
  ];



  public getFeet():Food[]{
    return this.feet;
  }

  public getFood(idx:string ){
    return this.feet[idx];
  }


  public getHeroeId(FoodName:string):number{
       
    FoodName=FoodName.toLowerCase();
   let i:number=0;
   for (let food of this.feet){
     
     let nombre = food.nombre.toLowerCase();
        if (nombre==FoodName){
           return i;
        }
    i++;    
   }
   return -1;
}

//Pata el search
buscarFood(termino:string):Food[]{
    
  console.log(termino);
  let feetArr:Food[] = [];
  termino = termino.toLowerCase();
  
  //for (let heroe of this.heroes) typical foreach
   for  (let i=0;i <this.feet.length; i++)
  {
    let food = this.feet[i];
    let nombre = food.nombre.toLowerCase();

    if(nombre.indexOf( termino) >=0){
      food.idx=i;
      feetArr.push( food );
    }
  }
  return feetArr;

}

  constructor() { 
    console.log("servicio food listo para usarse!!!");
  }
}




export interface Food{
  nombre:string;
  category:string;
  description:string;
  img:string;
  price:string; 
  idx?:number;
}