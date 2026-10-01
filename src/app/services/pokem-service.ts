import { Injectable, signal, computed } from '@angular/core';
import { PokemartItem } from '../models/poke-model';

@Injectable({
  providedIn: 'root'
})
export class PokemartService {
  readonly martItems = signal<PokemartItem[]>([
    { id: 101, 
        name: 'Poké Ball', 
        price: 200, 
        category: 'Balls'},
    { id: 102, 
        name: 'Great Ball', 
        price: 600, 
        category: 'Balls'},
    { id: 103, 
        name: 'Ultra Ball', 
        price: 1200, 
        category: 'Balls'},
    { id: 104, 
        name: 'Potion', 
        price: 300, 
        category: 'Medicine'},
    { id: 105, 
        name: 'Super Potion', 
        price: 700, 
        category: 'Medicine'},
    { id: 106, 
        name: 'Hyper Potion', 
        price: 1500, 
        category: 'Medicine'},
    { id: 107, 
        name: 'Revive', 
        price: 1500, 
        category: 'Medicine'},
    { id: 108, 
        name: 'Full Heal', 
        price: 400, 
        category: 'Medicine'},
    { id: 109, 
        name: 'Escape Rope', 
        price: 550, 
        category: 'General'
    
    },
    { id: 110, 
        name: 'Max Repel', 
        price: 700, 
        category: 'General'}
  ]);

  cartItems = signal<PokemartItem[]>([]);

  cart = this.cartItems.asReadonly();

  totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price, 0)
  );

  // Cart Functions
  addToCart(item: PokemartItem): void {
    this.cartItems.update((current) => [...current, item]);
  }

  removeFromCart(index: number): void {
    this.cartItems.update((current) => current.filter((_, i) => i !== index));
  }

  clearCart(): void {
    this.cartItems.set([]);
  }
}