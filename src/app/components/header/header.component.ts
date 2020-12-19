import {Component, OnInit} from '@angular/core';
import {DarkModeService} from '../../service/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  initialDarkMode: boolean;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.getDarkMode().subscribe(darkMode => this.initialDarkMode = darkMode);
  }

  ngOnInit(): void {
  }

  changeTheme($event) {
    this.darkModeService.setDarkMode($event.checked);
  }
}
