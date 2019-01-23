import { Component, OnInit } from '@angular/core';

import { Player } from '../Classes/player';
import { DebugContext } from '@angular/core/src/view';

import { DataService } from '../data.service';

@Component({
  selector: 'app-mannschaft',
  templateUrl: './mannschaft.component.html',
  styleUrls: ['./mannschaft.component.css']
})
export class MannschaftComponent implements OnInit {

  constructor(private dataService: DataService) { }

  players: Player[] = [];
  sturm: Player[] = [];
  mittelfeld: Player[] = [];
  verteidigung: Player[] = [];
  tor: Player[] = [];

  private i: number;

  ngOnInit() {
    this.GetPlayers();
    // this.OrganizePlayers();
  }

  GetPlayers() {
    this.dataService.GetPlayers()
      .subscribe((data: any) => {
      this.players = data;
    });
  }

  OrganizePlayers() {

    for (this.i = 0; this.i <= this.players.length; this.i ++) {
      if (this.players[this.i].position === 'Sturm') {
        this.sturm.push(this.players[this.i]);
      }

      if (this.players[this.i].position === 'Mittelfeld') {
        this.mittelfeld.push(this.players[this.i]);
      }

      if (this.players[this.i].position === 'Verteidigung') {
        this.verteidigung.push(this.players[this.i]);
      }

      if (this.players[this.i].position === 'Tor') {
        this.tor.push(this.players[this.i]);
      }
    }
  }
}
