import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmApiComponent } from './confirm-api.component';

describe('ConfirmApiComponent', () => {
  let component: ConfirmApiComponent;
  let fixture: ComponentFixture<ConfirmApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
