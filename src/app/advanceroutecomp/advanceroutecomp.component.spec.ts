import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceroutecompComponent } from './advanceroutecomp.component';

describe('AdvanceroutecompComponent', () => {
  let component: AdvanceroutecompComponent;
  let fixture: ComponentFixture<AdvanceroutecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceroutecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceroutecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
