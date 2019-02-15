import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { DataService } from './data.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieWebApp';
  movieresults : any;
  
  
  constructor(public _dataService: DataService, private route: ActivatedRoute) {}


  getValue(event:any){
    this._dataService.searchMovieByName(event.target.value).subscribe(_dataService => {
      this.movieresults = _dataService['results'];
      
    });
    if (event.target.value==false){
      this.movieresults=null;
    }
    }

  ngOnInit() {
    
  }

}
