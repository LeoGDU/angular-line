import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistroyDetailComponent } from './order-histroy-detail.component';

describe('OrderHistroyDetailComponent', () => {
  let component: OrderHistroyDetailComponent;
  let fixture: ComponentFixture<OrderHistroyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderHistroyDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHistroyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
