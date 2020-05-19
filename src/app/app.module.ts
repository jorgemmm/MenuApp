
//core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios
import { HeroesService }  from './services/heroes.service';


//Rutas
import { AppRoutingModule } from  './app-routing.module';
import { FoodService } from './services/food.service';

//Componentes
import { AppComponent } from      './app.component';
import { NavbarComponent } from  './components/shared/navbar/navbar.component';
import { HomeComponent } from  './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeCardComponent } from './components/cards/heroe-card/heroe-card.component';

import { GameCardComponent } from './components/cards/game-card/game-card.component';
import { FoodCardComponent } from './components/cards/food-card/food-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FooterComponent,
    HeroeDetailComponent,
    SearchComponent,
    HeroeCardComponent,
    GameCardComponent,
    FoodCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroesService,
    FoodService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
