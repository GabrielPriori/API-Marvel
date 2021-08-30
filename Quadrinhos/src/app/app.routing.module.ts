import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarvelCharacterComponent } from './marvel/marvel-character/marvel-character.component';
import { MarvelQuadrinhosComponent } from './marvel/marvel-quadrinho/marvel-quadrinhos.component';
import { MarvelEventosComponent } from './marvel/marvel-eventos/marvel-eventos.component';
import { MarvelSeriesComponent } from './marvel/marvel-series/marvel-series.component';
import { MarvelHistoriasComponent } from './marvel/marvel-historias/marvel-historias.component';

const routes: Routes = [
    {
        path: '',
        component: MarvelCharacterComponent
    },
    {
        path: 'quadrinhos/:id',
        component: MarvelQuadrinhosComponent
    },
    {
        path: 'eventos/:id',
        component: MarvelEventosComponent
    },
    {
        path: 'series/:id',
        component: MarvelSeriesComponent
    },
    {
        path: 'historias/:id',
        component: MarvelHistoriasComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}