import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterformComponent } from './renterform.component';

describe('RenterformComponent', () => {
  let component: RenterformComponent;
  let fixture: ComponentFixture<RenterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
