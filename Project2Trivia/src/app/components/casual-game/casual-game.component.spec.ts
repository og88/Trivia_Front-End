import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualGameComponent } from './casual-game.component';

describe('CasualGameComponent', () => {
  let component: CasualGameComponent;
  let fixture: ComponentFixture<CasualGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasualGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
