import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectGraphViewerComponent } from './object-graph-viewer.component';

describe('ObjectGraphViewerComponent', () => {
  let component: ObjectGraphViewerComponent;
  let fixture: ComponentFixture<ObjectGraphViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectGraphViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectGraphViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
