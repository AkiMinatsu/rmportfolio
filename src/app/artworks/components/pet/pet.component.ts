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
  selector: 'app-pet',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.scss'
})
export class PetComponent {
  currentIndex = 0;
  images: string[] = [
    '/assets/images/for-website/Artworks/Petart/petart1.jpg',
    '/assets/images/for-website/Artworks/Petart/petart2.jpg',
    '/assets/images/for-website/Artworks/Petart/petart3.jpg',
    '/assets/images/for-website/Artworks/Petart/petart4.jpg',
    '/assets/images/for-website/Artworks/Petart/petart6.jpg',
    '/assets/images/for-website/Artworks/Petart/petart7.jpg',
    '/assets/images/for-website/Artworks/Petart/petart5.jpg',

    
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
  this.dialog.open(PetComponent, {
    width: '100vw',
    height: '80vh',
    panelClass: 'full-screen-dialog',
  });
}

}
