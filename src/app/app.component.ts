import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'svrwgg';


  public highlight: number;

  public imageUrlArray: String[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.imageUrlArray.push('../assets/Mannschaftsbild-Slideshow.jpg');
    this.imageUrlArray.push('../assets/Spielfeld-Slideshow.jpg');
    this.imageUrlArray.push('../assets/Oktoberfest-Slideshow.jpg');
  }

  SetHightlight(int: number) {
    this.highlight = int;
  }
}
