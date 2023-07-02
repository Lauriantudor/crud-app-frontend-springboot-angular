import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParicipantComponent } from './create-paricipant.component';

describe('CreateParicipantComponent', () => {
  let component: CreateParicipantComponent;
  let fixture: ComponentFixture<CreateParicipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParicipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParicipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
