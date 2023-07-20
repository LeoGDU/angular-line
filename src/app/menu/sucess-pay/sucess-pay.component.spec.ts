import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessPayComponent } from './sucess-pay.component';

describe('SucessPayComponent', () => {
  let component: SucessPayComponent;
  let fixture: ComponentFixture<SucessPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
