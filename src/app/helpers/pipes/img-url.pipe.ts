import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrl',
  standalone: true
})
export class ImgUrlPipe implements PipeTransform {
  private readonly baseImgUrl = 'https://icherniakov.ru/yt-course/';
  private readonly defaultAvatarUrl = '/assets/images/account_default.png';

  transform(value: string | null | undefined): string {
    if (value) {
      return this.baseImgUrl + value;
    } else {
      return this.defaultAvatarUrl;
    }
    
  }

}
