import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPuzzleComponent } from './color-puzzle.component';

describe('ColorPuzzleComponent', () => {
  let component: ColorPuzzleComponent;
  let fixture: ComponentFixture<ColorPuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
