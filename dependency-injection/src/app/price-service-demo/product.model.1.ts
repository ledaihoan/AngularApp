import {PriceService} from './price.service.1';

export class Product {
  service: PriceService;
  basePrice: number;
  constructor(basePrice: number) {
    this.basePrice = basePrice;
    this.service = new PriceService();
  }

  totalPrice(state: string) {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }
}
