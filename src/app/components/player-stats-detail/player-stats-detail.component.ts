import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerStatsModel} from '../../model/player-stats-model';
import {PlayerStatsService} from '../../service/player-stats.service';

@Component({
  selector: 'app-player-stats-detail',
  templateUrl: './player-stats-detail.component.html',
  styleUrls: ['./player-stats-detail.component.css']
})
export class PlayerStatsDetailComponent implements OnInit {
  playerName: string;
  playerStats: PlayerStatsModel;
  constructor(private route: ActivatedRoute, private service: PlayerStatsService) {
    this.playerName = this.route.snapshot.paramMap.get('playerName');
  }

  ngOnInit(): void {
    this.service.getPlayerStatsByName(this.playerName).subscribe(stats => this.playerStats = stats, () => {});
  }

}
