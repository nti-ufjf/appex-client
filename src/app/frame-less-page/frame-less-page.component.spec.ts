import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameLessPageComponent } from './frame-less-page.component';

describe('FrameLessPageComponent', () => {
  let component: FrameLessPageComponent;
  let fixture: ComponentFixture<FrameLessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameLessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameLessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
