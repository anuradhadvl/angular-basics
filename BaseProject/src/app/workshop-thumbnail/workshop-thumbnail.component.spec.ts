import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopThumbnailComponent } from './workshop-thumbnail.component';

describe('WorkshopThumbnailComponent', () => {
  let component: WorkshopThumbnailComponent;
  let fixture: ComponentFixture<WorkshopThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
