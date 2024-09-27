import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAnalyserComponent } from './app-analyser.component';

describe('AppAnalyserComponent', () => {
  let component: AppAnalyserComponent;
  let fixture: ComponentFixture<AppAnalyserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAnalyserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAnalyserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
