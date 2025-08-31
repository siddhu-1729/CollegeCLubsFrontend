import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IEEE } from './ieee';

describe('IEEE', () => {
  let component: IEEE;
  let fixture: ComponentFixture<IEEE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IEEE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IEEE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
