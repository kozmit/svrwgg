import { Component, OnInit } from '@angular/core';

import { Player } from '../Classes/player';
import { DebugContext } from '@angular/core/src/view';

import { DataService } from '../data.service';

@Component({
  selector: 'app-kader',
  templateUrl: './kader.component.html',
  styleUrls: ['./kader.component.css']
})
export class KaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  players: Player[];


  ngOnInit() {

    this.dataService.GetPlayers()
      .subscribe((data: any) => {
      this.players = data;
    });
  }
}
