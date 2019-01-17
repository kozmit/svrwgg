import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Post } from './Classes/post';
import { Player } from './Classes/player';
import { Observable } from 'rxjs';
import { Event } from './Classes/event';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //////////////// SPIELER //////////////7

  players: Player[] = [
    new Player('Christian Hotop', 'Sturm', '../assets/test_picture.png'),
    new Player('Hendrik Rasmussen', 'Sturm', '../assets/test_picture.png'),
    new Player('Jan-Michael Köhler', 'Sturm', '../assets/test_picture.png'),
    new Player('Bastian Blume', 'Verteidigung', '../assets/test_picture.png'),
    new Player('Tobias Schreiber', 'Sturm', '../assets/test_picture.png'),
    new Player('Arne Feyerabend', 'Mittelfeld', '../assets/test_picture.png'),
    new Player('Diego Villaverde Varela', 'Mittelfeld', '../assets/test_picture.png'),
    new Player('Cedric Müller', 'Sturm', '../assets/test_picture.png'),
    new Player('Thorben Grabenhorst', 'Sturm', '../assets/test_picture.png'),
    new Player('Andre Heusinger', 'Tor', '../assets/test_picture.png'),
    new Player('Jonathan Polze', 'Sturm', '../assets/test_picture.png'),
    new Player('Kai Leifheit', 'Verteidigung', '../assets/test_picture.png'),
    new Player('Christoph Kuschnik', 'Mittelfeld', '../assets/test_picture.png'),
    new Player('Markus Laschak', 'Verteidigung', '../assets/test_picture.png'),
    new Player('Markus Meyer', 'Mittelfeld', '../assets/test_picture.png'),
    new Player('Maximilian Scholz', 'Sturm', '../assets/test_picture.png'),
    new Player('Nick Weichsel', 'Verteidigung', '../assets/test_picture.png'),
    new Player('Gregor Klink', 'Mittelfeld', '../assets/test_picture.png'),
    new Player('Patrick Rau', 'Mittelfeld', '../assets/test_picture.png'),
    new Player('Sven Zähres', 'Mittelfeld', '../assets/test_picture.png'),
    new Player('Steffen Schreiber', 'Mittelfeld', '../assets/test_picture.png'),
    new Player('Thomas Przyklenk', 'Verteidigung', '../assets/test_picture.png'),
    new Player('Tim Dagger', 'Sturm', '../assets/test_picture.png'),
    new Player('Tim Petruszek', 'Mittelfeld', '../assets/test_picture.png'),
    new Player('Willy Schüler', 'Mittelfeld', '../assets/test_picture.png'),
  ];

  //////////////// SPIELER //////////////////


  /////////////// BLOG POSTS ////////////////////

  posts: Post[] = [
    new Post('Spiel gegen Clauen/ Soßmar II', `Dieses Wochenende hat sich die Truppe mal wieder stark in Zeug gelegt und
      früh gute Chancen herausgespielt. Die 2:0 Führung in der ersen Halbzeit war somit mehr als verdient.
      In der zweiten Halbzeit wurde das Ergebnis verwaltet, es kamen nichtmehr viele Angriffe bis in den
      Strafraum von Clauen/Soßmar. Insgesamt eine starke erste Halbzeit unserer Rot-Weißen mit einem verdienten
      Sieg, auch wenn die Gesamtleistung verbesserungswürdig war.`, '02.11.2018'),

    new Post('Oktoberfest', `Geiler Abend für unsere Truppe. Erst Fotoshooting Termin, welcher
      bereits mit 80 Bieren für gute Stimmung sorgte, ging es dannach zum Üfinger Hof wo feucht
      fröhlich weiter gefeiert wurde.`, '02.11.2018'),

  ];

  //////////////// BLOG POSTS //////////////////


  //////////////// EVENTS /////////////////////

  events: Event[] = [

    ////////////////// TEST ///////////////////////

    // new Event (18, '30', 23, 12, 2018, 'Event 1'),
    // new Event (18, '30', 28, 12, 2018, 'Event 2'),
    // new Event (18, '30', 2, 1, 2019, 'Event 3'),
    // new Event (18, '30', 25, 12, 2018, 'Event 4'),

    // new Event (18, '30', 23, 1, 2019, 'Event 1'),
    // new Event (18, '30', 7, 2, 2019, 'Event 2'),
    // new Event (18, '30', 1, 1, 2019, 'Event 3'),
    // new Event (18, '30', 22, 12, 2018, 'Event 4'),



    /////////////////  TRAINING  ////////////////////

    new Event (18, '30', 6, 11, 2018, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),
    new Event (18, '30', 13, 11, 2018, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),
    new Event (18, '30', 20, 11, 2018, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),
    new Event (18, '30', 27, 11, 2018, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),

    new Event (18, '30', 5, 2, 2019, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),
    new Event (18, '30', 12, 2, 2019, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),
    new Event (18, '30', 19, 2, 2019, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),
    new Event (18, '30', 26, 2, 2019, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),

    new Event (18, '30', 5, 3, 2019, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),
    new Event (18, '30', 12, 3, 2019, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),
    new Event (18, '30', 19, 3, 2019, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),
    new Event (18, '30', 26, 3, 2019, 'Training 1. Herren', 'Sportplatz Groß Gleidingen'),


    /////////////////// SPIELE ///////////////////////

    new Event (14, '00', 16, 2, 2019, 'Freundschaftsspiel gegen TUS Kleefeld Ü32', 'Sportplatz Groß Gleidingen'),
    new Event (13, '00', 2, 3, 2019, 'Freundschaftsspiel gegen TSV Üfingen', 'Sportplatz Groß Gleidingen'),

    new Event (13, '00', 10, 3, 2019, 'Punktspiel gegen TSV Denstorf II', 'Sportplatz Denstorf'),
    new Event (19, '00', 15, 3, 2019, 'Punktspiel gegen TSV Münstedt II', 'Sportplatz Groß Gleidingen'),
    new Event (13, '00', 24, 3, 2019, 'Punktspiel gegen TuS Oberg II', 'Sportplatz Oberg'),
    new Event (19, '00', 29, 3, 2019, 'Punktspiel gegen BSC Bülten II', 'Sportplatz Groß Gleidingen'),


    ////////////////// SAUFEN  ///////////////////////

    new Event (19, '00', 1, 12, 2018, 'Weihnachtsfeier 1. Herren', 'Üfinger Hof'),

  ];

  /////////////// EVENTS //////////////////////

  ///////////// Navbar ////////////////////
  public highlight: number;

  constructor()  { }

  GetPlayers(): Observable<any[]> {
    return of(this.players);
  }

  GetBlogPosts(): Observable<any[]> {
    return of(this.posts);
  }

  GetEvents(): Event[] {
    return this.events;
  }

  SetHighlight(int: number) {
    this.highlight = int;
  }

  GetHightlight() {
    return this.highlight;
  }
}
