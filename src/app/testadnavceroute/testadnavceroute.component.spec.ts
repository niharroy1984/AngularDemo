import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestadnavcerouteComponent } from './testadnavceroute.component';

describe('TestadnavcerouteComponent', () => {
  let component: TestadnavcerouteComponent;
  let fixture: ComponentFixture<TestadnavcerouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestadnavcerouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestadnavcerouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
