import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgileCardComponent } from "./common-ui/progile-card/progile-card.component";
import { ProfileService } from './data/services/profile.service';

import { Profile } from './data/interfaces/profile.interface';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testProj1';
}
