import { Component, inject } from '@angular/core';
import { PokemartService } from '../../services/pokem-service';

@Component({
  imports: [],
  selector: 'app-poke-mart',
  styleUrl: './poke-mart.css',
  templateUrl: './poke-mart.html',
})
export class PokeMart {
  readonly martService = inject(PokemartService);
}
