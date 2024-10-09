import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HomeComponent } from "../home/home.component";
import { BioComponent } from "../bio/bio.component";
import { CosplayComponent } from "../cosplay/cosplay.component";
import { ContactComponent } from "../contact/contact.component";
import { ArtworksComponent } from "../artworks/artworks.component";
import { BackgroundComponent } from "../background/background.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, BioComponent, CosplayComponent, ContactComponent, ArtworksComponent, BackgroundComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
