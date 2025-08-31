import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMC } from './amc';

describe('AMC', () => {
  let component: AMC;
  let fixture: ComponentFixture<AMC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AMC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AMC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
