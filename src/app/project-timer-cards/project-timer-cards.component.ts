import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { inject } from '@vercel/analytics';
import { ChangeDetectorRef } from '@angular/core';

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
    { title: 'Le Cinéma de la rue du Bac à Solde - Episode 5', image: 'assets/project/1.jpeg', link: 'https://www.youtube.com/watch?v=PCCx83zEns4' },
    { title: 'Le Cinéma de la rue du Bac à Solde - Episode 9', image: 'assets/project/2.jpeg', link: 'https://www.youtube.com/watch?v=VXnsLcvMp6Y' },
    { title: 'Etoiles 2 Valenciennes', image: 'assets/project/3.jpeg', link: 'https://www.youtube.com/watch?v=t2TvDJF7XRM' },
    { title: 'ILTV - LA TELE AU COEUR DU BASSIN MINIER', image: 'assets/project/4.jpeg', link: 'https://www.facebook.com/reel/215446778094763' },
    { title: 'Qui es tu coach 1', image: 'assets/project/5.jpeg', link: 'https://www.facebook.com/CrossFitLXII/videos/406285128550176/' },
    { title: 'Qui es tu coach 2', image: 'assets/project/6.jpeg', link: 'https://www.facebook.com/CrossFitLXII/videos/1441270116475895/' },
    { title: 'Génerique destination formation', image: 'assets/project/7.png', link: 'https://drive.google.com/file/d/1QzEws86bf5XdO2rXby77BiTAbtp0UdS4/view' },
    { title: 'Générique focus', image: 'assets/project/8.png', link: 'https://drive.google.com/file/d/1fkK2Sl-qz27GA3GMGWlMyCXHq4bogQcD/view' },
    { title: 'Travailler intelligemment', image: 'assets/project/10.png', link: 'https://drive.google.com/file/d/1QLMhVlLGln7atYKXzus_FeolMetDQI7Q/view' },
    { title: 'VIDEOCLUB - Amour plastique', image: 'assets/project/11.png', link: 'https://drive.google.com/file/d/1P7QGLcKU2iiZ-pD6DAqtNyUcTWojQ5UY/view' },
  ];

  currentIndex: number = 0;
  backgroundStyle: string = '';
  timer: any;
  progressInterval: any = null;
  progress: number = 0;
  isBrowser: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdRef: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  get previousProject(): Project {
    return this.projects[(this.currentIndex - 1 + this.projects.length) % this.projects.length];
  }

  get currentProject(): Project {
    return this.projects[this.currentIndex];
  }

  get nextProject(): Project {
    return this.projects[(this.currentIndex + 1) % this.projects.length];
  }

  updateBackground(): void {
    this.backgroundStyle = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${this.currentProject.image})`;
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      inject();
      this.updateBackground();
      this.startTimer();
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
    if (this.progressInterval) clearInterval(this.progressInterval);
  }

  startTimer(): void {
    this.resetProgressBar();
    this.startProgressBar();
    this.timer = setInterval(() => {
      this.goToNextProject();
    }, 5000);
  }

  startProgressBar(): void {
    this.progress = 0;
    if (this.progressInterval) clearInterval(this.progressInterval);

    this.progressInterval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 2;
      }
    }, 100);
  }

  resetProgressBar(): void {
    this.progress = 0;
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  goToPrevProject(event?: Event): void {
    event?.stopPropagation();
    console.log('goToPrevProject clicked');
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.updateBackground();
    this.resetProgressBar();
    this.startProgressBar();
    this.cdRef.detectChanges();
  }

  goToNextProject(event?: Event): void {
    event?.stopPropagation();
    console.log('goToNextProject clicked');
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.updateBackground();
    this.resetProgressBar();
    this.startProgressBar();
    this.cdRef.detectChanges();
  }

  openLink(link: string): void {
    if (this.isBrowser) {
      window.open(link, '_blank');
    }
  }
}
