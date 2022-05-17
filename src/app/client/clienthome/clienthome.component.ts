import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/service/movie';

import { MovieService } from 'src/app/service/movie/movie.service';

@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.component.html',
  styleUrls: ['./clienthome.component.css']
})
export class ClienthomeComponent implements OnInit {
  movies!: Movie[];
  constructor( private itemservice:MovieService) { }

  ngOnInit(): void {
    this.itemservice.getMovies().subscribe((movies:any)=>{
      this.movies=movies;
    })
    
  }

}
