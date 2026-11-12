import { Component } from '@angular/core';


import {
  // Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// export class HomeComponent {

// }







export class HomeComponent implements AfterViewInit {

  @ViewChild('logoVideo')
  logoVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.logoVideo.nativeElement;

    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    video.play().catch(error => {
      console.warn('Automatic video playback was blocked:', error);
    });
  }

}
