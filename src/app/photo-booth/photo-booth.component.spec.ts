import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoothComponent } from './photo-booth.component';

describe('PhotoBoothComponent', () => {
  let component: PhotoBoothComponent;
  let fixture: ComponentFixture<PhotoBoothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoBoothComponent]
    });
    fixture = TestBed.createComponent(PhotoBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
