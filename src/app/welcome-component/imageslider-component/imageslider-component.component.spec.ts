import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesliderComponentComponent } from './imageslider-component.component';

describe('ImagesliderComponentComponent', () => {
  let component: ImagesliderComponentComponent;
  let fixture: ComponentFixture<ImagesliderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesliderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesliderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
