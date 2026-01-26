import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service4 } from './service-4';

describe('Service4', () => {
  let component: Service4;
  let fixture: ComponentFixture<Service4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
