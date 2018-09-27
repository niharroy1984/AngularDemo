import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecomptwoComponent } from './servicecomptwo.component';

describe('ServicecomptwoComponent', () => {
  let component: ServicecomptwoComponent;
  let fixture: ComponentFixture<ServicecomptwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecomptwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecomptwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
