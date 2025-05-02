import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectTimerCardsComponent } from './project-timer-cards.component';
import { CommonModule } from '@angular/common';

describe('ProjectTimerCardsComponent', () => {
  let component: ProjectTimerCardsComponent;
  let fixture: ComponentFixture<ProjectTimerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTimerCardsComponent, CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTimerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should go to the next project', () => {
    const initialIndex = component.currentIndex;
    component.goToNextProject();
    expect(component.currentIndex).toBe((initialIndex + 1) % component.projects.length);
  });

  it('should go to the previous project', () => {
    const initialIndex = component.currentIndex;
    component.goToPrevProject();
    expect(component.currentIndex).toBe((initialIndex - 1 + component.projects.length) % component.projects.length);
  });

  it('should reset and start progress bar', (done) => {
    component.progress = 0;
    component.startProgressBar();

    setTimeout(() => {
      expect(component.progress).toBeGreaterThan(0);
      component.resetProgressBar();
      expect(component.progress).toBe(0);
      done();
    }, 300); // vérifie après 300ms
  });
});
