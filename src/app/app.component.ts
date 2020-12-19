import {Component} from '@angular/core';
import {DarkModeService} from './service/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme: boolean;

  constructor(private darkModeService: DarkModeService) {
    darkModeService.getDarkMode().subscribe(darkMode => this.darkTheme = darkMode);
  }

  getTheme(): string {
    if (this.darkTheme) {
      return 'dark-theme';
    } else {
      return 'light-theme';
    }
  }
}
