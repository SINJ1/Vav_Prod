import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { inject } from "@vercel/analytics";

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
    { title: 'Projet 1', image: 'assets/project/1.jpeg', link: 'https://www.youtube.com/watch?v=PCCx83zEns4&list=PLyJj6xkYbjteCAkSeTDPkiXm8KLmtgygB&index' },
    { title: 'Projet 2', image: 'assets/project/2.jpeg', link: 'https://www.youtube.com/watch?v=VXnsLcvMp6Y&list=PLyJj6xkYbjteCAkSeTDPkiXm8KLmtgygB&index=' },
    { title: 'Projet 3', image: 'assets/project/3.jpeg', link: 'https://www.youtube.com/watch?v=t2TvDJF7XRM&t' },
    { title: 'Projet 4', image: 'assets/project/4.jpeg', link: 'https://www.facebook.com/reel/215446778094763' },
    { title: 'Projet 5', image: 'assets/project/5.jpeg', link: 'https://www.facebook.com/CrossFitLXII/videos/406285128550176/' },
    { title: 'Projet 6', image: 'assets/project/6.jpeg', link: 'https://www.facebook.com/CrossFitLXII/videos/1441270116475895/' },
    { title: 'Projet 7', image: 'assets/project/7.png', link: 'https://drive.google.com/file/d/1QzEws86bf5XdO2rXby77BiTAbtp0UdS4/view' },
    { title: 'Projet 8', image: 'assets/project/8.png', link: 'https://drive.google.com/file/d/1fkK2Sl-qz27GA3GMGWlMyCXHq4bogQcD/view' },
    { title: 'Projet 9', image: 'assets/project/9.png', link: 'https://drive.google.com/file/d/1WvJkmk1tevb7bbOphnj32myqP051lmvf/view' },
    { title: 'Projet 10', image: 'assets/project/10.png', link: 'https://drive.google.com/file/d/1QLMhVlLGln7atYKXzus_FeolMetDQI7Q/view' },
    { title: 'Projet 11', image: 'assets/project/11.png', link: 'https://drive.google.com/file/d/1P7QGLcKU2iiZ-pD6DAqtNyUcTWojQ5UY/view' },
  ];

  currentIndex = 0;
  timer: any;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  get currentBackground() {
    return `url(${this.projects[this.currentIndex].image})`;
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      inject();
      this.startTimer();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.timer) {
      clearInterval(this.timer);
    }
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
    if (this.isBrowser) {
      window.open(link, '_blank');
    }
  }
}
