import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoNewComponent } from './photo-new.component';

describe('PhotoNewComponent', () => {
  let component: PhotoNewComponent;
  let fixture: ComponentFixture<PhotoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
