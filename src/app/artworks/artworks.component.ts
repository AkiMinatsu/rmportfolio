import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrintMakingComponent } from './components/print-making/print-making.component';
import { AnimeArtComponent } from './components/anime-art/anime-art.component';
import { DigitalArtComponent } from './components/digital-art/digital-art.component';
import { FashionAndCraftComponent } from './components/fashion-and-craft/fashion-and-craft.component';
import { PaintingComponent } from './components/painting/painting.component';
import { PetComponent } from './components/pet/pet.component';
import { PortraitComponent } from './components/portrait/portrait.component';
import { ReligiousComponent } from './components/religious/religious.component';
import { SculptureComponent } from './components/sculpture/sculpture.component';

@Component({
  selector: 'app-artworks',
  standalone: true,
  imports: [],
  templateUrl: './artworks.component.html',
  styleUrl: './artworks.component.scss',
})
export class ArtworksComponent {
  constructor(public dialog: MatDialog) {}

  Painting() {
    this.dialog.open(PaintingComponent);
  }
  Sculpture() {
    this.dialog.open(SculptureComponent);
  }
  PrintMaking() {
    this.dialog.open(PrintMakingComponent);
  }
  Anime() {
    this.dialog.open(AnimeArtComponent);
  }
  Digital() {
    this.dialog.open(DigitalArtComponent);
  }
  Religious() {
    this.dialog.open(ReligiousComponent);
  }
  Pet() {
    this.dialog.open(PetComponent);
  }
  Portrait() {
    this.dialog.open(PortraitComponent);
  }
  Fashion() {
    this.dialog.open(FashionAndCraftComponent);
  }
}
