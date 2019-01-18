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

  players: Player[];


  ngOnInit() {

    this.dataService.GetPlayers()
      .subscribe((data: any) => {
      this.players = data;
    });
  }
}
