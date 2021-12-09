import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DspOffersComponent } from './dsp-offers.component';

describe('DspOffersComponent', () => {
  let component: DspOffersComponent;
  let fixture: ComponentFixture<DspOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DspOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DspOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
