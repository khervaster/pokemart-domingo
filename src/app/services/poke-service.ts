import { Injectable, signal } from '@angular/core';
import { Pokemon } from '../models/poke-model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  kantoPokemon = signal<Pokemon[]>([
    {
      id: 1,
      name: 'Charizard',
      type: 'Fire / Flying',
      heldItem: 'Charcoal',
      description: 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
      image:'',
    },
    {
      id: 2,
      name: 'Gengar',
      type: 'Ghost / Poison',
      heldItem: 'Spell Tag',
      description: 'To steal the life of its target, it slips into the prey\'s shadow and silently waits for an opportunity.',
      image:'',
    }
  ]);

  johtoPokemon = signal<Pokemon[]>([
    {
      id: 3,
      name: 'Typhlosion',
      type: 'Fire',
      heldItem: 'Magnet',
      description: 'It has a secret, devastating move. It rubs its blazing fur together to cause huge explosions.',
      image:'',
    },
    {
      id: 4,
      name: 'Tyranitar',
      type: 'Rock / Dark',
      heldItem: 'Hard Stone',
      description: 'Its body can\'t be harmed by any attack, so it is very eager to make challenges with enemies.',
      image:'',
    }
  ]);

  hoennPokemon = signal<Pokemon[]>([
    {
      id: 5,
      name: 'Rayquaza',
      type: 'Dragon / Flying',
      heldItem: 'Dragon Fang',
      description: 'It lives in the ozone layer far above the clouds and cannot be seen from the ground.',
      image:'',
    },
    {
      id: 6,
      name: 'Gardevoir',
      type: 'Psychic / Fairy',
      heldItem: 'Twisted Spoon',
      description: 'To protect its Trainer, it will expend all its psychic power to create a small black hole.',
      image:'',
    }
  ]);
}