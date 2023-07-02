import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsOfProjectComponent } from './participants-of-project.component';

describe('ParticipantsOfProjectComponent', () => {
  let component: ParticipantsOfProjectComponent;
  let fixture: ComponentFixture<ParticipantsOfProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsOfProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsOfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
