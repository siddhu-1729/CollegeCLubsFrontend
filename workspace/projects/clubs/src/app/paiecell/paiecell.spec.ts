import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAIECELL } from './paiecell';

describe('PAIECELL', () => {
  let component: PAIECELL;
  let fixture: ComponentFixture<PAIECELL>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PAIECELL]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PAIECELL);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
