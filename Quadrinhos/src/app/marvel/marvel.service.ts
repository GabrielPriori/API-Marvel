import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  TIME_STEMP = '16185334990410';
  API_KEY = 'f819f3621f81dde7edc382743d93d41c';
  MD5 = '968c51ae154e70c54a0d0dd4fb5f405d';
  API_URL = 'https://gateway.marvel.com/v1/public/'
  
  KEY = '?ts='+this.TIME_STEMP+'&apikey='+this.API_KEY+'&hash='+this.MD5+'';

  constructor(
    private http: HttpClient
  ) { }

  getTodosPersonagens(): Observable<any> {
      return this.http.get<any>(this.API_URL + 'characters' + this.KEY + '&limit=49')
     .pipe(map((data: any) => data.data.results))
  }

  getQuadrinhosCharacterId(id: number) {
    return this.http.get<any>(this.API_URL + `characters/${id}/comics` + this.KEY)
      .pipe(map((data: any) => data.data.results))
  }

  getEventosCharacterId(id: number) {
    return this.http.get<any>(this.API_URL + `characters/${id}/events` + this.KEY)
      .pipe(map((data: any) => data.data.results))
  }

  getSeriesCharacterId(id: number) {
    return this.http.get<any>(this.API_URL + `characters/${id}/series` + this.KEY)
      .pipe(map((data: any) => data.data.results))
  }

  getHistoriasCharacterId(id: number) {
    return this.http.get<any>(this.API_URL + `characters/${id}/stories` + this.KEY)
      .pipe(map((data: any) => data.data.results))
  }

}
