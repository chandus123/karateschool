import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsliderComponent } from './eventslider.component';

describe('EventsliderComponent', () => {
  let component: EventsliderComponent;
  let fixture: ComponentFixture<EventsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
