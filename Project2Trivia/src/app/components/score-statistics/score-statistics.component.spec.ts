import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreStatisticsComponent } from './score-statistics.component';

describe('ScoreStatisticsComponent', () => {
  let component: ScoreStatisticsComponent;
  let fixture: ComponentFixture<ScoreStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
