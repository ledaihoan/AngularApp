import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuCustomValidatorComponent } from './demo-form-sku-custom-validator.component';

describe('DemoFormSkuCustomValidatorComponent', () => {
  let component: DemoFormSkuCustomValidatorComponent;
  let fixture: ComponentFixture<DemoFormSkuCustomValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuCustomValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuCustomValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
