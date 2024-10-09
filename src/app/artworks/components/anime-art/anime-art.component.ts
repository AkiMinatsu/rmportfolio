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
  selector: 'app-anime-art',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,],
  templateUrl: './anime-art.component.html',
  styleUrl: './anime-art.component.scss'
})
export class AnimeArtComponent {

  currentIndex = 0;
  images: string[] = [
    '/assets/images/for-website/Artworks/Animeart/animeart1.jpg',
    '/assets/images/for-website/Artworks/Animeart/animeart2.jpg',
    '/assets/images/for-website/Artworks/Animeart/animeart3.jpg',
    '/assets/images/for-website/Artworks/Animeart/animeart4.jpg',
    '/assets/images/for-website/Artworks/Animeart/animeart5.jpg',
    '/assets/images/for-website/Artworks/Animeart/animeart6.jpg',
    '/assets/images/for-website/Artworks/Animeart/animeart7.jpg',
    '/assets/images/for-website/Artworks/Animeart/animeart8.jpg',
    '/assets/images/for-website/Artworks/Animeart/animeart9.jpg',
    '/assets/images/for-website/Artworks/Animeart/animeart10.jpg',
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
  this.dialog.open(AnimeArtComponent, {
    width: '100vw',
    height: '80vh',
    panelClass: 'full-screen-dialog',
  });
}

}
