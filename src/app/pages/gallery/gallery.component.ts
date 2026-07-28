// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-gallery',
//   templateUrl: './gallery.component.html',
//   styleUrls: ['./gallery.component.css']
// })
// export class GalleryComponent {
//   images = [
//     'assets/gallery/Hdf009efeadd34d61bd02d36ef084df1c2.jpg_720x720q50.avif',
//     'assets/gallery/OIP.webp',
//     'assets/gallery/OIP.webp',
//     // 'assets/gallery/Beige and Green Simple Photo.png',
//     // 'assets/gallery/BlogLog.jpeg',
//     // 'assets/gallery/cycling-bicycle.gif',
//     'assets/gallery/360 photo booth.webp',
//     'assets/gallery/360 spin photo booth gif.gif',
//     'assets/gallery/360 spin photo booth.png'
//   ];

//   selectedImage: string | null = null;

//   open(img: string) {
//     this.selectedImage = img;
//   }

//   close() {
//     this.selectedImage = null;
//   }
// }





import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  activeTab: 'images' | 'videos' = 'images';

  images = [
    'assets/gallery/Hdf009efeadd34d61bd02d36ef084df1c2.jpg_720x720q50.avif',
    'assets/gallery/OIP.webp',
    'assets/gallery/OIP.webp',
    'assets/gallery/360 photo booth.webp',
    'assets/gallery/360 spin photo booth.png',
    'assets/gallery/360 spin photo booth gif.gif'
  ];

  videos = [
    'assets/gallery/video1.mp4',
    'assets/gallery/video2.mp4',
    'assets/gallery/video3.mp4'
  ];

  selectedImage: string | null = null;

  open(img: string) {
    this.selectedImage = img;
  }

  close() {
    this.selectedImage = null;
  }
}
