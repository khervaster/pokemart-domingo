import { Component, inject, signal } from '@angular/core';
import { PokeService } from '../../services/poke-service';
import { PokeCard } from '../poke-card/poke-card';
@Component({
  imports: [PokeCard],
  selector: 'app-poke-list',
  styleUrl: './poke-list.css',
  templateUrl: './poke-list.html',
})
export class PokeList {
  readonly pokemonService = inject(PokeService);
  readonly selectedFav = signal<string>('');

  handleFavorite(name: string): void {
    this.selectedFav.set(name);
  }
}
