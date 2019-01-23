import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'svrwgg';

  navbarOpen = false;

  public highlight: number;
  public imageUrlArray: String[] = [];

  private navbar: HTMLElement;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.highlight = 1;
    this.imageUrlArray.push('../assets/Mannschaftsbild-Slideshow.jpg');
    this.imageUrlArray.push('../assets/Spielfeld-Slideshow.jpg');
    this.imageUrlArray.push('../assets/Oktoberfest-Slideshow.jpg');
  }

  toggleNavbar() {

    this.navbar = document.getElementById('myTopnav');

    if (this.navbar.className === 'topnav') {
      this.navbar.className += ' responsive';
    } else {
      this.navbar.className = 'topnav';
    }
  }
}
