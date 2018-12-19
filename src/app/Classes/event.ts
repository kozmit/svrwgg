export class Event {

  constructor(hour: number, minute: String, day: number, month: number, year: number, event: String) {
    this.hour = hour;
    this.minute = minute;
    this.day = day;
    this.month = month;
    this.year = year;
    this.event = event;
    this.date = new Date(month + '.' + day + '.' + year);
  }

  date: Date;
  hour: number;
  minute: String;
  day: number;
  month: number;
  year: number;
  event: String;
}
