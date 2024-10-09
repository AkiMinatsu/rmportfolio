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
  selector: 'app-print-making',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: './print-making.component.html',
  styleUrls: ['./print-making.component.scss'],
})
export class PrintMakingComponent {
  currentIndex = 0; // Track the current image index
  images: string[] = [
    '/assets/images/for-website/Artworks/Printmaking/printmaking1.jpg',
    '/assets/images/for-website/Artworks/Printmaking/printmaking2.jpg',
    '/assets/images/for-website/Artworks/Printmaking/printmaking3.jpg',
    
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
  this.dialog.open(PrintMakingComponent, {
    width: '100vw',
    height: '80vh',
    panelClass: 'full-screen-dialog',
  });
}

}
