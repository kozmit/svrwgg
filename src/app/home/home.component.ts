import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Event } from '../Classes/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nextEvents: Event[] = [];
  events: Event[] = [];
  date: Date;

  private i: number;
  private j: number;
  private z: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.GetEvents();
    this.GetRecentEvents();
  }

  GetRecentEvents() {

    this.date = new Date();

    for (this.i = 0; this.i < 3; this.i ++) {
      this.nextEvents[this.i] = new Event(99, '99', 30, 12, 2099, 'test');
    }

    for (this.i = 0; this.i < this.events.length; this.i ++) {
      if (this.date < this.events[this.i].date) {
        for (this.j = 2; this.j >= 0; this.j --) {
          if (this.events[this.i].date < this.nextEvents[this.j].date) {
            if (this.j + 1 > 2) {
            } else {
              this.nextEvents[this.j + 1] = this.nextEvents[this.j];
            }
            this.nextEvents[this.j] = this.events[this.i];
          }
        }
      }
    }
  }

  GetEvents() {
    this.events = this.dataService.GetEvents();
  }
}
