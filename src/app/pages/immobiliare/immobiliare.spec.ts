import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Immobiliare } from './immobiliare';

describe('Immobiliare', () => {
  let component: Immobiliare;
  let fixture: ComponentFixture<Immobiliare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Immobiliare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Immobiliare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
