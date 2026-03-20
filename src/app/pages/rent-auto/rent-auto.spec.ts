import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAuto } from './rent-auto';

describe('RentAuto', () => {
  let component: RentAuto;
  let fixture: ComponentFixture<RentAuto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentAuto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentAuto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
