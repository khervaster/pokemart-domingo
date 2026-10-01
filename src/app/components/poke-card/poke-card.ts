import { Component, input, output } from '@angular/core';
import { Pokemon } from '../../models/poke-model';

@Component({
  imports: [],
  selector: 'app-poke-card',
  styleUrl: './poke-card.css',
  templateUrl: './poke-card.html',
})
export class PokeCard {
  pokemon = input.required<Pokemon>();
  selectFavorite = output<string>();

  onFavoriteClick(): void {
    this.selectFavorite.emit(this.pokemon().name);
  }
}
