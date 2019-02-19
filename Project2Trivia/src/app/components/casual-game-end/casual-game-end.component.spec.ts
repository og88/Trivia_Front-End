import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualGameEndComponent } from './casual-game-end.component';

describe('CasualGameEndComponent', () => {
  let component: CasualGameEndComponent;
  let fixture: ComponentFixture<CasualGameEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasualGameEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualGameEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
