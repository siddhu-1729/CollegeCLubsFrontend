import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOLO } from './lolo';

describe('LOLO', () => {
  let component: LOLO;
  let fixture: ComponentFixture<LOLO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LOLO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LOLO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
