import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { 
    path: 'pokemon', 
    loadComponent: () => import('./components/poke-list/poke-list').then(m => m.PokeList) 
  },
  { 
    path: 'pokemart', 
    loadComponent: () => import('./components/poke-mart/poke-mart').then(m => m.PokeMart) 
  },
  { path: '**', redirectTo: 'pokemon' }
];