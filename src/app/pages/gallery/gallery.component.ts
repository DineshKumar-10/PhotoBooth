import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    'assets/gallery/Beige and Green Simple Photo.png',
    'assets/gallery/BlogLog.jpeg',
    'assets/gallery/cycling-bicycle.gif',
    'assets/gallery/Hdf009efeadd34d61bd02d36ef084df1c2.jpg_720x720q50.avif',
    'assets/gallery/OIP.webp',
    'assets/gallery/OIP.webp'
  ];

  selectedImage: string | null = null;

  open(img: string) {
    this.selectedImage = img;
  }

  close() {
    this.selectedImage = null;
  }
}
