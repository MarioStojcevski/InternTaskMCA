import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRemoveComponent } from './photo-remove.component';

describe('PhotoRemoveComponent', () => {
  let component: PhotoRemoveComponent;
  let fixture: ComponentFixture<PhotoRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
