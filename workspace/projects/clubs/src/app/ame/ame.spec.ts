import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AME } from './ame';

describe('AME', () => {
  let component: AME;
  let fixture: ComponentFixture<AME>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AME]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AME);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
