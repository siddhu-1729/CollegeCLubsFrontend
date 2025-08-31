import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACE } from './ace';

describe('ACE', () => {
  let component: ACE;
  let fixture: ComponentFixture<ACE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
