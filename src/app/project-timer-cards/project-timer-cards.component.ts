import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-project-timer-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-timer-cards.component.html',
  styleUrls: ['./project-timer-cards.component.css']
})
export class ProjectTimerCardsComponent implements OnInit, OnDestroy {
  projects: Project[] = [
    { title: 'Projet 1', image: 'assets', link: 'https://example.com/1' },
    { title: 'Projet 2', image: 'assets/projet.png', link: 'https://example.com/2' },
    { title: 'Projet 3', image: 'assets/projet.png', link: 'https://example.com/3' },
    { title: 'Projet 4', image: 'assets/projet.png', link: 'https://example.com/4' },
    { title: 'Projet 5', image: 'assets/projet.png', link: 'https://example.com/5' },
    { title: 'Projet 6', image: 'assets/projet.png', link: 'https://example.com/6' },
    { title: 'Projet 7', image: 'assets/projet.png', link: 'https://example.com/7' },
    { title: 'Projet 8', image: 'assets/projet.png', link: 'https://example.com/8' },
    { title: 'Projet 9', image: 'assets/projet.png', link: 'https://example.com/9' },
    { title: 'Projet 10', image: 'assets/projet.png', link: 'https://example.com/10' },
    { title: 'Projet 11', image: 'assets/projet.png', link: 'https://example.com/11' },
  ];

  currentIndex = 0;
  timer: any;

  get currentBackground() {
    return `url(${this.projects[this.currentIndex].image})`;
  }

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      this.nextProject();
    }, 5000);
  }

  nextProject(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  openLink(link: string): void {
    window.open(link, '_blank');
  }
}
