import {IPriceService} from './price-service-interface';

export class Product {
  service: IPriceService;
  basePrice: number;
  constructor(service: IPriceService, basePrice: number) {
    this.basePrice = basePrice;
    this.service = service;
  }

  totalPrice(state: string) {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }
}
