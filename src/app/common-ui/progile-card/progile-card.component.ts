import { Component, input, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-progile-card',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './progile-card.component.html',
  styleUrl: './progile-card.component.scss'
})
export class ProgileCardComponent {
  // profile: Profile = input<Profile>();
  @Input() profile?: Profile;

}
