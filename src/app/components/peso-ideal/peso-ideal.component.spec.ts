import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoIdealComponent } from './peso-ideal.component';

describe('PesoIdealComponent', () => {
  let component: PesoIdealComponent;
  let fixture: ComponentFixture<PesoIdealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesoIdealComponent]
    });
    fixture = TestBed.createComponent(PesoIdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
