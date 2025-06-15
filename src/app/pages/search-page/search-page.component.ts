import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProgileCardComponent } from '../../common-ui/progile-card/progile-card.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProgileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService = inject(ProfileService);
  profiles: Profile[] = [];


  constructor() {
    this.profileService.getTestAcounts().subscribe(val => {
      this.profiles = val;
    })
  }
}
