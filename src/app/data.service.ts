import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class DataService {
    API_KEY = "fec622218cdc4357045279eacd92a5df"
    constructor(private http: HttpClient) { }
 
    getMovies() {
        return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_KEY + '&language=en-US&page=1')
    }
    getMovieById(id: number) {

        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.API_KEY + '&language=en-US');
    }
    getCastById(id: number){
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=' + this.API_KEY + '&language=en-US');

   }
    getRecommendations(id: number){
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key=' + this.API_KEY + '&language=en-US');

   }
   searchMovieByName(name: String){
       return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.API_KEY + '&language=en-US&query='+name+'&page=1&include_adult=false')
   }
}
