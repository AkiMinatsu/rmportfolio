import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fashion-and-craft',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,],
  templateUrl: './fashion-and-craft.component.html',
  styleUrl: './fashion-and-craft.component.scss'
})
export class FashionAndCraftComponent {
  currentIndex = 0;
  images: string[] = [
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft1.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft2.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft3.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft4.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft5.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft6.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft7.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft8.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft9.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft10.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft11.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft12.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft13.jpg',
    '/assets/images/for-website/Artworks/fashioncraft/Fashioncraft14.jpg',
  ];

  // Navigate to the next image
  nextImage(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }

  // Navigate to the previous image
  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
constructor(private dialog: MatDialog) {}

// Open the dialog with full-screen configuration
openDialog(): void {
  this.dialog.open(FashionAndCraftComponent, {
    width: '100vw',
    height: '80vh',
    panelClass: 'full-screen-dialog',
  });
}
}


