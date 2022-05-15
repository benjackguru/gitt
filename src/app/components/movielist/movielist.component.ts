import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  displayedcolumns :string[]=['moviename','quality','language','400mb', '700mb', '1.4gb', 'action'];
  datasource = new MatTableDataSource;
  Movies:any=[];

  constructor( private router:Router ) { }

  ngOnInit(): void {
  }


  @ViewChild(MatPaginator)paginator!:MatPaginator;

  showAddMovie(){
    this.router.navigate(['movie-add'])
  }

}
