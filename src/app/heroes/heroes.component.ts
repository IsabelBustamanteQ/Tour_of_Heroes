import { Component,OnInit } from '@angular/core';
import { Hero } from '../hero'; //importamos la interface
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes:Hero[]=[];
  selectedHero?:Hero;
  constructor(private heroService:HeroService, private messsageService:MessageService){}
  ngOnInit():void{
    this.getHeroes();
  }
  onSelect(hero:Hero): void{
    this.selectedHero=hero;
    this.messsageService.add('HeroesComponent: Selected hero id=${hero.id}');
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }
  
}
