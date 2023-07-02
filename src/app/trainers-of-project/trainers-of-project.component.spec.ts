import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersOfProjectComponent } from './trainers-of-project.component';

describe('TrainersOfProjectComponent', () => {
  let component: TrainersOfProjectComponent;
  let fixture: ComponentFixture<TrainersOfProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainersOfProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersOfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
