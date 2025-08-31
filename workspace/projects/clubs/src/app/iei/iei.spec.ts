import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IEI } from './iei';

describe('IEI', () => {
  let component: IEI;
  let fixture: ComponentFixture<IEI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IEI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IEI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
