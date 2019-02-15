import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title = 'movies';
  movies: any;
  constructor( public _dataService: DataService) {

  }


  ngOnInit() {
    this._dataService.getMovies().subscribe(_dataService => {
      this.movies = _dataService['results'];
      console.log(_dataService)
    }
    );
  }

}



