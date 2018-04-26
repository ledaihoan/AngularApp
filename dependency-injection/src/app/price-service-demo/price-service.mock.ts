import {IPriceService} from './price-service-interface';

export class MockPriceService implements IPriceService {
  calculateTotalPrice(basePrice: number, state: string): number {
    if ('FL' === state) {
      return basePrice + 0.66;
    }
    return basePrice;
  }
}
