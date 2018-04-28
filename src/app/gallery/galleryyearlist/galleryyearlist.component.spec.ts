import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryyearlistComponent } from './galleryyearlist.component';

describe('GalleryyearlistComponent', () => {
  let component: GalleryyearlistComponent;
  let fixture: ComponentFixture<GalleryyearlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryyearlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryyearlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
