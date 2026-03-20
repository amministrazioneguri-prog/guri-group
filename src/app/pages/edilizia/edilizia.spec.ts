import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Edilizia } from './edilizia';

describe('Edilizia', () => {
  let component: Edilizia;
  let fixture: ComponentFixture<Edilizia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Edilizia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Edilizia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
