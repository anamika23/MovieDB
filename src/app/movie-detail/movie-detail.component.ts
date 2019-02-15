import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  title = 'movies';
  movies: any;
  isLoaded = false;
  casts: any;
  isCastLoaded = false;
  recommendations: any;

  slideConfig = { "slidesToShow": 7, "slidesToScroll": 1, "autoplay": true, "infinite":true}

  constructor( public _dataService: DataService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this._dataService.getMovieById(this.route.snapshot.params.id).subscribe( _dataService => {
      this.movies = _dataService;
      this.isLoaded = true;
      console.log(_dataService);
    });

   
      this._dataService.getCastById(this.route.snapshot.params.id).subscribe(_dataService => {
        this.casts = _dataService['cast'];
        console.log('casts',this.casts);
        this.isCastLoaded = true;
      });
    
    this._dataService.getRecommendations(this.route.snapshot.params.id).subscribe(_dataService => {
      this.recommendations = _dataService['results'];
      console.log('recommend',this.recommendations);
    });
  }

}


