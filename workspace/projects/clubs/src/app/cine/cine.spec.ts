import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CINE } from './cine';

describe('CINE', () => {
  let component: CINE;
  let fixture: ComponentFixture<CINE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CINE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CINE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
