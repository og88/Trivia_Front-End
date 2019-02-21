import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGameEndComponent } from './play-game-end.component';

describe('PlayGameEndComponent', () => {
  let component: PlayGameEndComponent;
  let fixture: ComponentFixture<PlayGameEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayGameEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayGameEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
