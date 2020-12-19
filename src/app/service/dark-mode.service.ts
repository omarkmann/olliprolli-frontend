import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkMode = new BehaviorSubject<boolean>(true);

  constructor() {
    this.detectPrefersColorScheme();
  }

  setDarkMode(newValue: boolean): void {
    this.darkMode.next(newValue);
  }

  getDarkMode(): Observable<boolean> {
    return this.darkMode.asObservable();
  }

  detectPrefersColorScheme() {
    let darkMode: boolean;
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      darkMode = false;
    }
    this.darkMode.next(darkMode);
  }
}
