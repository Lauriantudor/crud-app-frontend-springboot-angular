import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParticipantsOfProjectComponent } from './add-participants-of-project.component';

describe('AddParticipantsOfProjectComponent', () => {
  let component: AddParticipantsOfProjectComponent;
  let fixture: ComponentFixture<AddParticipantsOfProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParticipantsOfProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParticipantsOfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
