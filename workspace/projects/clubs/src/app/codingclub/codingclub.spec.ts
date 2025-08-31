import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codingclub } from './codingclub';

describe('Codingclub', () => {
  let component: Codingclub;
  let fixture: ComponentFixture<Codingclub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codingclub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Codingclub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
