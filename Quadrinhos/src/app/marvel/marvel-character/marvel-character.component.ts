import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-marvel-character',
  templateUrl: './marvel-character.component.html',
  styleUrls: ['./marvel-character.component.css']
})
export class MarvelCharacterComponent implements OnInit {

  paginacao: Observable<any>
  characters: Observable<any>
  ids: number;
  randoms: number;
  randoms2: number;
  randoms3: number;
  randoms4: number;
  randoms5: number;
  itemRaro: boolean = false;
  public paginaAtual = 1;

  constructor(
    private MarvelService: MarvelService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.characters = this.MarvelService.getTodosPersonagens()
    this.paginacao = this.MarvelService.getTodosPersonagens()

    for (let i=0; i<this.ids; i++){
      let id = this.ids[i];
    }

    this.randoms = this.randomNumber(0, 50)
    this.randoms2 = this.randomNumber(0, 50)
    this.randoms3 = this.randomNumber(0, 50)
    this.randoms4 = this.randomNumber(0, 50)
    this.randoms5 = this.randomNumber(0, 50)

  }

  onItemRaro(){
    this.itemRaro = !this.itemRaro;
  }

  showQuadrinhos(id:number){
    this.router.navigate(['/quadrinhos/', id]);
  }

  showEventos(id:number){
    this.router.navigate(['/eventos/', id]);
  }
  
  showSeries(id:number){
    this.router.navigate(['/series/', id]);
  }
  
  showHistorias(id:number){
    this.router.navigate(['/historias/', id]);
  }

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

}
