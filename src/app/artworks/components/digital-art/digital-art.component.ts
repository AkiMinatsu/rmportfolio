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
  selector: 'app-digital-art',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,],
  templateUrl: './digital-art.component.html',
  styleUrl: './digital-art.component.scss'
})
export class DigitalArtComponent {

  currentIndex = 0;
  images: string[] = [
    '/assets/images/for-website/Artworks/Digitalart/digitalart1.jpg',
    '/assets/images/for-website/Artworks/Digitalart/digitalart2.jpg',
    '/assets/images/for-website/Artworks/Digitalart/digitalart3.jpg',
    '/assets/images/for-website/Artworks/Digitalart/digitalart4.jpg',
    '/assets/images/for-website/Artworks/Digitalart/digitalart5.jpg',
    '/assets/images/for-website/Artworks/Digitalart/digitalart6.jpg',
    '/assets/images/for-website/Artworks/Digitalart/digitalart7.jpg',
    '/assets/images/for-website/Artworks/Digitalart/digitalart8.jpg',

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
  this.dialog.open(DigitalArtComponent, {
    width: '100vw',
    height: '80vh',
    panelClass: 'full-screen-dialog',
  });
}

}
