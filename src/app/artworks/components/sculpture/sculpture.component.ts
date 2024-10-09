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
  selector: 'app-sculpture',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: './sculpture.component.html',
  styleUrl: './sculpture.component.scss'
})
export class SculptureComponent {
  currentIndex = 0; // Track the current image index
  images: string[] = [
    '/assets/images/for-website/Artworks/Sculpture/sculpture1.jpg',
    '/assets/images/for-website/Artworks/Sculpture/sculpture2.jpg',
    '/assets/images/for-website/Artworks/Sculpture/sculpture3.jpg',
    
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
  this.dialog.open(SculptureComponent, {
    width: '100vw',
    height: '80vh',
    panelClass: 'full-screen-dialog',
  });
}

}
