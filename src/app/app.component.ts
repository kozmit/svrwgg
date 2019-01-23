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

  public imageUrlArray: String[] = [];

  private navbar: HTMLElement;
  private highlight: HTMLElement;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.highlight = document.getElementById('Startseite');
    this.highlight.className += ' active';
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

  SetHighlight(highlight: string) {
    this.highlight.className = 'navEntry';
    this.highlight = document.getElementById(highlight);
    this.highlight.className += 'active';
  }


  /*  CODE FOR HIGHLIGHT



  $(document).ready(function () {
    $('#navbar a').on("click", function () {
        $(this).parent().siblings().find("a").removeClass('active');
        $(this).addClass('active');
    });
  });


  */
}
