import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IETE } from './iete';

describe('IETE', () => {
  let component: IETE;
  let fixture: ComponentFixture<IETE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IETE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IETE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
