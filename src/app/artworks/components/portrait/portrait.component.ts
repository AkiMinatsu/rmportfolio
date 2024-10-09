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
  selector: 'app-portrait',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,],
  templateUrl: './portrait.component.html',
  styleUrl: './portrait.component.scss'
})
export class PortraitComponent {
  currentIndex = 0;
  images: string[] = [
    '/assets/images/for-website/Artworks/Portrait/portrait1.jpg',
    '/assets/images/for-website/Artworks/Portrait/portrait2.jpg',
    '/assets/images/for-website/Artworks/Portrait/portrait3.jpg',
    '/assets/images/for-website/Artworks/Portrait/portrait4.jpg',
    '/assets/images/for-website/Artworks/Portrait/portrait5.jpg',
    '/assets/images/for-website/Artworks/Portrait/portrait6.jpg',
    '/assets/images/for-website/Artworks/Portrait/portrait7.jpg',
    '/assets/images/for-website/Artworks/Portrait/portrait8.jpg',
    '/assets/images/for-website/Artworks/Portrait/portrait9.jpg',
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
  this.dialog.open(PortraitComponent, {
    width: '100vw',
    height: '80vh',
    panelClass: 'full-screen-dialog',
  });
}

}
