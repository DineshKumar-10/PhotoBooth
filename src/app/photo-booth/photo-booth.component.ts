

// import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

// @Component({
//   selector: 'app-photo-booth',
//   templateUrl: './photo-booth.component.html',
//   styleUrls: ['./photo-booth.component.css']
// })
// export class PhotoBoothComponent implements AfterViewInit, OnDestroy {

//   isCameraOn = false;

//   @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
//   @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

//   stream!: MediaStream;

//   selectedFilter: string = 'none';
//   cameraFacing: 'user' | 'environment' = 'user';

//   capturedImage = '';
//   qrCodeUrl = '';

//   countdown = 0;
//   flash = false;

//   resolution = 'hd';

  

//   ngAfterViewInit(): void {
//     document.addEventListener('visibilitychange', () => {
//       if (document.hidden) {
//         this.stopCamera();
//       }
//     });
//   }

//   startCamera() {
//     navigator.mediaDevices.getUserMedia({
//       video: { facingMode: this.cameraFacing }
//     }).then(stream => {
//       this.stream = stream;
//       this.video.nativeElement.srcObject = stream;
//       this.isCameraOn = true;
//     });
//   }

//   stopCamera() {
//     if (this.stream) {
//       this.stream.getTracks().forEach(track => track.stop());
//       this.video.nativeElement.srcObject = null;
//       this.isCameraOn = false;
//     }
//   }

//   switchCamera() {
//     this.stopCamera();
//     this.cameraFacing = this.cameraFacing === 'user' ? 'environment' : 'user';
//     this.startCamera();
//   }

//   onFilterChange(event: Event) {
//     this.selectedFilter = (event.target as HTMLSelectElement).value;
//   }

//   getFilter(): string {
//     const filters: Record<string, string> = {
//       none: 'none',
//   grayscale: 'grayscale(100%)',
//   sepia: 'sepia(100%)',
//   blur: 'blur(4px)',
//   brightness: 'brightness(120%)',
//   contrast: 'contrast(150%)',
//   saturate: 'saturate(180%)',
//   vintage: 'sepia(60%) contrast(120%)',
//   cool: 'contrast(110%) saturate(90%) hue-rotate(180deg)'
//     };
//     return filters[this.selectedFilter] ?? 'none';
//   }

//   startCountdown() {
//     if (!this.isCameraOn) return;

//     this.countdown = 3;
//     const timer = setInterval(() => {
//       this.countdown--;
//       if (this.countdown === 0) {
//         clearInterval(timer);
//         this.triggerFlash();
//         this.capture();
//       }
//     }, 1000);
//   }

//   triggerFlash() {
//     this.flash = true;
//     setTimeout(() => this.flash = false, 150);
//   }

//   capture() {
//     const canvas = this.canvas.nativeElement;
//     const ctx = canvas.getContext('2d')!;
//     const video = this.video.nativeElement;

//     const width = video.videoWidth;
//     const height = video.videoHeight;

//     canvas.width = width;
//     canvas.height = height;

//     ctx.filter = this.getFilter();
//     ctx.drawImage(video, 0, 0, width, height);

//     this.capturedImage = canvas.toDataURL('image/png');
//     this.generateQR();
//   }

//   download() {
//     const a = document.createElement('a');
//     a.href = this.capturedImage;
//     a.download = 'photo-booth.png';
//     a.click();
//   }

//   generateQR() {
//     this.qrCodeUrl =
//       'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' +
//       encodeURIComponent(this.capturedImage);
//   }

//   retake() {
//     this.capturedImage = '';
//     this.qrCodeUrl = '';
//   }

//   ngOnDestroy() {
//     this.stopCamera();
//   }
// }





import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-photo-booth',
  templateUrl: './photo-booth.component.html',
  styleUrls: ['./photo-booth.component.css']
})
export class PhotoBoothComponent implements AfterViewInit, OnDestroy {

  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  stream!: MediaStream;
  isCameraOn = false;

  selectedFilter = 'none';
  selectedFrame = 'none';
  cameraFacing: 'user' | 'environment' = 'user';

  capturedImage = '';
  qrCodeUrl = '';

  countdown = 0;
  flash = false;

  readonly WIDTH = 1800;
  readonly HEIGHT = 1200;

  sound = new Audio('assets/camera.mp3');

  ngAfterViewInit() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopCamera();
      }
    });
  }

  startCamera() {
    navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: this.cameraFacing,
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    }).then(stream => {
      this.stream = stream;
      this.video.nativeElement.srcObject = stream;
      this.isCameraOn = true;
    });
  }

  stopCamera() {
    this.stream?.getTracks().forEach(t => t.stop());
    this.video.nativeElement.srcObject = null;
    this.isCameraOn = false;
  }

  switchCamera() {
    this.stopCamera();
    this.cameraFacing =
      this.cameraFacing === 'user' ? 'environment' : 'user';
    this.startCamera();
  }

  onFilterChange(event: Event) {
    this.selectedFilter =
      (event.target as HTMLSelectElement).value;
  }

  getFilter(): string {
    const f: Record<string, string> = {
      none: 'none',
      grayscale: 'grayscale(100%)',
      sepia: 'sepia(100%)',
      blur: 'blur(4px)',
      brightness: 'brightness(120%)',
      contrast: 'contrast(150%)',
      saturate: 'saturate(180%)',
      vintage: 'sepia(60%) contrast(120%)',
      cool: 'hue-rotate(180deg)'
    };
    return f[this.selectedFilter] ?? 'none';
  }

  startCountdown() {
    if (!this.isCameraOn) return;

    this.countdown = 3;
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(timer);
        this.triggerFlash();
        this.capture();
      }
    }, 1000);
  }

  triggerFlash() {
    this.flash = true;
    setTimeout(() => (this.flash = false), 150);
  }

  capture() {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d')!;
    const video = this.video.nativeElement;

    canvas.width = this.WIDTH;
    canvas.height = this.HEIGHT;

    ctx.filter = this.getFilter();
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.filter = 'none';

    this.drawFrame(ctx);

    this.sound.currentTime = 0;
    this.sound.play();

    this.capturedImage = canvas.toDataURL('image/png');
    this.generateQR();
  }

  drawFrame(ctx: CanvasRenderingContext2D) {
    if (this.selectedFrame === 'none') return;

    const frame = new Image();
    frame.src = `assets/frames/${this.selectedFrame}.png`;

    frame.onload = () => {
      ctx.drawImage(
        frame,
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      );
      this.capturedImage =
        ctx.canvas.toDataURL('image/png');
    };
  }

  download() {
    const a = document.createElement('a');
    a.href = this.capturedImage;
    a.download = 'magizh-photo.png';
    a.click();
  }

  generateQR() {
    this.qrCodeUrl =
      'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' +
      encodeURIComponent('Captured via Magizh Magic Touch');
  }

  retake() {
    this.capturedImage = '';
    this.qrCodeUrl = '';
  }

  ngOnDestroy() {
    this.stopCamera();
  }
}
