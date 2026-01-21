// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-photo-booth',
//   templateUrl: './photo-booth.component.html',
//   styleUrls: ['./photo-booth.component.css']
// })
// export class PhotoBoothComponent {

// }


// import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'app-photo-booth',
//   templateUrl: './photo-booth.component.html',
//   styleUrls: ['./photo-booth.component.css']
// })
// export class PhotoBoothComponent implements AfterViewInit {

//   isCameraOn = false;

//   @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
//   @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

//   stream!: MediaStream;
//   selectedFilter: string = 'none';
//   cameraFacing: 'user' | 'environment' = 'user';
//   capturedImage = '';

 

//   // startCamera() {
//   //   navigator.mediaDevices.getUserMedia({
//   //     video: { facingMode: this.cameraFacing }
//   //   }).then(stream => {
//   //     this.stream = stream;
//   //     this.video.nativeElement.srcObject = stream;
//   //   });
//   // }


//   startCamera() {
//   navigator.mediaDevices.getUserMedia({
//     video: { facingMode: this.cameraFacing }
//   }).then(stream => {
//     this.stream = stream;
//     this.video.nativeElement.srcObject = stream;
//     this.isCameraOn = true;
//   });
// }

//   // stopCamera() {
//   //   this.stream?.getTracks().forEach(track => track.stop());
//   //   this.video.nativeElement.srcObject = null;
//   // }


//   stopCamera() {
//   if (this.stream) {
//     this.stream.getTracks().forEach(track => track.stop());
//     this.video.nativeElement.srcObject = null;
//     this.isCameraOn = false;
//   }
// }

//   switchCamera() {
//     this.stopCamera();
//     this.cameraFacing = this.cameraFacing === 'user' ? 'environment' : 'user';
//     this.startCamera();
//   }

 

//   getFilter(): string {
//   const filters: Record<string, string> = {
//     none: 'none',
//     grayscale: 'grayscale(100%)',
//     sepia: 'sepia(100%)',
//     blur: 'blur(4px)'
//   };

//   return filters[this.selectedFilter] ?? 'none';
// }


//   capture() {
//     const canvas = this.canvas.nativeElement;
//     const ctx = canvas.getContext('2d')!;
//     canvas.width = 320;
//     canvas.height = 240;

//    ctx.filter = this.getFilter();
//     ctx.drawImage(this.video.nativeElement, 0, 0, canvas.width, canvas.height);

//     this.capturedImage = canvas.toDataURL('image/png');

//   this.capturedImage = canvas.toDataURL('image/png');
// this.generateQR();

//   }

//   download() {
//     const a = document.createElement('a');
//     a.href = this.capturedImage;
//     a.download = 'photo-booth.png';
//     a.click();
//   }


//   qrCodeUrl = '';

// generateQR() {
//   this.qrCodeUrl =
//     'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' +
//     encodeURIComponent(this.capturedImage);
// }

// ngOnDestroy() {
//   this.stopCamera();
// }

// }



import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-photo-booth',
  templateUrl: './photo-booth.component.html',
  styleUrls: ['./photo-booth.component.css']
})
export class PhotoBoothComponent implements AfterViewInit, OnDestroy {

  isCameraOn = false;

  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  stream!: MediaStream;
  selectedFilter: string = 'none';
  cameraFacing: 'user' | 'environment' = 'user';
  capturedImage = '';

  qrCodeUrl = '';

  ngAfterViewInit(): void {
console.log('PhotoBoothComponent view initialized');

  // Stop camera when user switches tabs
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      this.stopCamera();
    }
  });  }

  startCamera() {
    navigator.mediaDevices.getUserMedia({
      video: { facingMode: this.cameraFacing }
    }).then(stream => {
      this.stream = stream;
      this.video.nativeElement.srcObject = stream;
      this.isCameraOn = true;
    });
  }

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.video.nativeElement.srcObject = null;
      this.isCameraOn = false;
    }
  }

  switchCamera() {
    this.stopCamera();
    this.cameraFacing = this.cameraFacing === 'user' ? 'environment' : 'user';
    this.startCamera();
  }

  getFilter(): string {
    const filters: Record<string, string> = {
      none: 'none',
      grayscale: 'grayscale(100%)',
      sepia: 'sepia(100%)',
      blur: 'blur(4px)'
    };
    return filters[this.selectedFilter] ?? 'none';
  }

  capture() {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = 320;
    canvas.height = 240;

    ctx.filter = this.getFilter();
    ctx.drawImage(this.video.nativeElement, 0, 0, canvas.width, canvas.height);

    this.capturedImage = canvas.toDataURL('image/png');
    this.generateQR();
  }

  download() {
    const a = document.createElement('a');
    a.href = this.capturedImage;
    a.download = 'photo-booth.png';
    a.click();
  }

  generateQR() {
    this.qrCodeUrl =
      'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' +
      encodeURIComponent(this.capturedImage);
  }

  ngOnDestroy() {
    this.stopCamera();
  }
}
