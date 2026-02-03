import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service5 } from './service-5';

describe('Service5', () => {
  let component: Service5;
  let fixture: ComponentFixture<Service5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
