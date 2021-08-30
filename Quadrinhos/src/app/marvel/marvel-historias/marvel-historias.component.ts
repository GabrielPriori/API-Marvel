import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-marvel-historias',
  templateUrl: './marvel-historias.component.html',
  styleUrls: ['./marvel-historias.component.css']
})
export class MarvelHistoriasComponent implements OnInit {

  characters

  constructor(
    private route: ActivatedRoute,
    private MarvelService: MarvelService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10)
      this.characters = this.MarvelService.getHistoriasCharacterId(id)
    })
  }
}
