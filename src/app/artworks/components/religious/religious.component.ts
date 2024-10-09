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
  selector: 'app-religious',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: './religious.component.html',
  styleUrl: './religious.component.scss'
})
export class ReligiousComponent {
  currentIndex = 0; // Track the current image index
  images: string[] = [
  
    '/assets/images/for-website/Artworks/Religiousart/religious2.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious3.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious4.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious5.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious6.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious7.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious8.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious9.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious10.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious11.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious12.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious13.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious14.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious15.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious16.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious17.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious18.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious19.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious20.jpg',
    '/assets/images/for-website/Artworks/Religiousart/religious21.jpg',
    
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
  this.dialog.open(ReligiousComponent, {
    width: '100vw',
    height: '80vh',
    panelClass: 'full-screen-dialog',
  });
}

}

