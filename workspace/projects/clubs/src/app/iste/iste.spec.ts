import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISTE } from './iste';

describe('ISTE', () => {
  let component: ISTE;
  let fixture: ComponentFixture<ISTE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ISTE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ISTE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
