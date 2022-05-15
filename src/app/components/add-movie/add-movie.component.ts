import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movieForm:FormGroup;
  constructor( private formBuilder:FormBuilder, private router:Router ) { 
    this.movieForm=this.formBuilder.group({
      moviename :['', Validators.required],
      quality :['', Validators.required],
      language :['', Validators.required],
      lq :['', Validators.required],
      mq :['', Validators.required],
      hq:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
