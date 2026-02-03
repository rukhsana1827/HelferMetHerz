import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service6 } from './service-6';

describe('Service6', () => {
  let component: Service6;
  let fixture: ComponentFixture<Service6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
