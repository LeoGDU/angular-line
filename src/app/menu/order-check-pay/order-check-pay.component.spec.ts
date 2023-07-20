import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCheckPayComponent } from './order-check-pay.component';

describe('OrderCheckPayComponent', () => {
  let component: OrderCheckPayComponent;
  let fixture: ComponentFixture<OrderCheckPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCheckPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCheckPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
