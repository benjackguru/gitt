import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  getId:any;
  updateForm!:FormGroup;

  constructor(private formBilder:FormBuilder, private router:Router,private ngzone:NgZone,private activatedRoute:ActivatedRoute) { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.updateForm=this.formBilder.group({
      moviename:[''],
      quality:[''],
      language:[''],
      lq:[''],
      mq:[''],
      hq:[''],

    })
  }

  ngOnInit(): void {
  }

}
