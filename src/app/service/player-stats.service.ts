import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {PlayerStatsModel} from '../model/player-stats-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {

  constructor(private http: HttpClient) {
  }

  getPlayerStats(): Observable<PlayerStatsModel[]> {
    // return this.http.get<PlayerStatsModel>(`player-stats-api/player-stats`);
    return of([{
      playerId: 'dd4fbed8-aa22-4f15-9c51-548af344dd38',
      playerName: 'TestPlayer',
      deathCount: 5,
      iconUrl: 'assets/images/favicon.png'
    }]);
  }
  getPlayerStatsByName(playerName: string): Observable<PlayerStatsModel> {
    // return this.http.get<PlayerStatsModel>(`player-stats-api/player-stats?name=${playerName}`);
    return of({
      playerId: 'dd4fbed8-aa22-4f15-9c51-548af344dd38',
      playerName: 'TestPlayer',
      deathCount: 5,
      iconUrl: 'assets/images/favicon.png'
    });
  }
}
