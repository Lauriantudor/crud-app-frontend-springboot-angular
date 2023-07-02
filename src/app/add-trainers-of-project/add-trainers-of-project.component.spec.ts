import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainersOfProjectComponent } from './add-trainers-of-project.component';

describe('AddTrainersOfProjectComponent', () => {
  let component: AddTrainersOfProjectComponent;
  let fixture: ComponentFixture<AddTrainersOfProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainersOfProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainersOfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
