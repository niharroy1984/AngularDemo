import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpdatacomponetComponent } from './httpdatacomponet.component';

describe('HttpdatacomponetComponent', () => {
  let component: HttpdatacomponetComponent;
  let fixture: ComponentFixture<HttpdatacomponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpdatacomponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpdatacomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
