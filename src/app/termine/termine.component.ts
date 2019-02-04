import { Component, OnInit } from '@angular/core';

import { Day } from '../Classes/day';
import { Event } from '../Classes/event';
import { DataService } from '../data.service';

@Component({
  selector: 'app-termine',
  templateUrl: './termine.component.html',
  styleUrls: ['./termine.component.css']
})
export class TermineComponent implements OnInit {

  events: Event[] = [];
  choosenEvents: Array<Event> = [];

  // Variables for the calendar
  public month: number;
  public year: number;
  public currentDays: Array<Day> = [];
  public postDays: Array<Day> = [];
  public preDays: Array<Day> = [];
  public date: Date = new Date();

  // Hilfsvariablen
  private i: number;
  private j: number;
  private maxDayPreMonth: number;
  private preDaysLength: number;
  private postDayLength: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    this.i = 0;
    this.month = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();
    this.SetDays();
    this.GetEvents();
    this.SetEvents();
  }

  ChooseEvent(month: number , day: number) {
    this.choosenEvents = [];
    if (day === 0) {
      this.choosenEvents = null;
    } else {
      for (this.i = 0; this.i < this.events.length; this.i ++) {
        if (this.events[this.i].month === this.month + month && this.events[this.i].day === day) {
          this.choosenEvents.push(this.events[this.i]);
        }
      }
    }
  }

  SetEvents() {
    // Termine für Predays ermitteln
    for (this.i = 0; this.i < this.events.length; this.i ++) {
      for (this.j = 0; this.j < this.preDays.length; this.j ++) {
        if (this.events[this.i].year === this.year &&
            this.events[this.i].month === this.month - 1 &&
            this.events[this.i].day === this.preDays[this.j].day) {
          this.preDays[this.j].termine.push(this.events[this.i].event);
        }
      }
    }

    // Termine für currentdays ermitteln
    for (this.i = 0; this.i < this.events.length; this.i ++) {
      if (this.events[this.i].month === this.month) {
        this.currentDays[this.events[this.i].day - 1].termine.push(this.events[this.i].event);
      }
    }

    // Termine für postdays ermitteln
    for (this.i = 0; this.i < this.events.length; this.i ++) {
      for (this.j = 0; this.j < this.postDays.length; this.j ++) {
        if (this.events[this.i].month === this.month + 1 && this.events[this.i].day === this.postDays[this.j].day) {
          this.postDays[this.j].termine.push(this.events[this.i].event);
        }
      }
    }
  }

  GetEvents() {
    this.events = this.dataService.GetEvents();
  }

  monthBack() {
    this.month = this.month - 1;
    if (this.month < 1) {
      this.month = 12;
      this.year = this.year - 1;
      this.date.setFullYear(this.year);
    }
    this.date.setMonth(this.month - 1);
    this.SetDays();
    this.SetEvents();
  }

  monthForward() {
    this.month = this.month + 1;
    if ( this.month > 12 ) {
      this.month = 1;
      this.year = this.year + 1;
      this.date.setFullYear(this.year);
    }
    this.date.setMonth(this.month - 1);
    this.SetDays();
    this.SetEvents();
  }

  SetDays() {

    this.currentDays = [];
    this.preDays = [];
    this.postDays = [];
    // Monate mit 31 Tagen belegen
    if (
      this.month === 1 ||
      this.month === 3 ||
      this.month === 5 ||
      this.month === 7 ||
      this.month === 8 ||
      this.month === 10 ||
      this.month === 12
    ) {
      for (this.i = 1; this.i < 32; this.i++) {
        this.currentDays.push(new Day(this.i, null));
      }
    }

    // Monate mit 30 Tagen belegen
    if (
      this.month === 4 ||
      this.month === 6 ||
      this.month === 9 ||
      this.month === 11
    ) {
      for (this.i = 1; this.i < 31; this.i++) {
        this.currentDays.push(new Day(this.i, null));
      }
    }

    // Februar mit 28 tagen belegen
    if (
      this.month === 2
    ) {
      for (this.i = 1; this.i < 29; this.i++) {
        this.currentDays.push(new Day(this.i, null));
      }
    }

    // Anzahl der Tage des Vormonats ermitteln

    if (
      this.month === 1 ||
      this.month === 2 ||
      this.month === 4 ||
      this.month === 6 ||
      this.month === 8 ||
      this.month === 9 ||
      this.month === 11
    ) {
      this.maxDayPreMonth = 31;
    }

    if (
      this.month === 5 ||
      this.month === 7 ||
      this.month === 10 ||
      this.month === 12
    ) {
      this.maxDayPreMonth = 30;
    }

    if (
      this.month === 3
    ) {
      this.maxDayPreMonth = 28;
    }

    // Wochentag des ersten Tages des Monats ermitteln - 0 = Sunday, 1 = Monday etc...


    for (this.i = 0; this.i <= 7; this.i++) {

      if (this.date.getDay() === 0) {
        this.preDaysLength = 6;
      }

      if (this.date.getDay() !== 0 && this.date.getDay() === this.i) {
        this.preDaysLength = this.i - 1;
      }
    }

    // PreDays Array belegen

    for (this.i = 1; this.i < this.preDaysLength + 1; this.i++) {
      this.preDays.push(new Day(this.maxDayPreMonth, null));
        this.maxDayPreMonth --;
    }
    this.preDays.reverse();

    this.postDayLength = 42 - this.currentDays.length - this.preDays.length;
    for (this.i = 1; this.i < this.postDayLength + 1; this.i++) {
      this.postDays.push(new Day(this.i, null));
    }
  }

}
