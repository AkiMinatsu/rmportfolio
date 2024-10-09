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
  selector: 'app-painting',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,],
  templateUrl: './painting.component.html',
  styleUrl: './painting.component.scss'
})
export class PaintingComponent {
  currentIndex = 0;
  images: string[] = [
    '/assets/images/for-website/Artworks/Painting/painting1.jpg',
    '/assets/images/for-website/Artworks/Painting/painting2.jpg',
    '/assets/images/for-website/Artworks/Painting/painting3.jpg',
    '/assets/images/for-website/Artworks/Painting/painting4.jpg',
    '/assets/images/for-website/Artworks/Painting/painting5.jpg',
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
  this.dialog.open(PaintingComponent, {
    width: '100vw',
    height: '80vh',
    panelClass: 'full-screen-dialog',
  });
}

}