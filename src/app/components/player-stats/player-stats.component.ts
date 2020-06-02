import { Component, OnInit } from '@angular/core';
import {PlayerStatsModel} from '../../model/player-stats-model';
import {PlayerStatsService} from '../../service/player-stats.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {

  playerStatsList: PlayerStatsModel[];
  displayedColumns: string[] = ['number', 'icon', 'name', 'actions'];

  constructor(private service: PlayerStatsService) {
  }

  ngOnInit(): void {
    this.service.getPlayerStats().subscribe(result => this.playerStatsList = result);
  }

  getPlayerStats(){

  }

}
