import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTimerCardsComponent } from './project-timer-cards.component';

describe('ProjectTimerCardsComponent', () => {
  let component: ProjectTimerCardsComponent;
  let fixture: ComponentFixture<ProjectTimerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectTimerCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTimerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
