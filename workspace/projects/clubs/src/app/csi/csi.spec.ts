import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSI } from './csi';

describe('CSI', () => {
  let component: CSI;
  let fixture: ComponentFixture<CSI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
