import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  REST_API:string="http://localhost:8000/api/";


  httpHeaders=new HttpHeaders().set('Content-Type','application/json')

  constructor( private httpClient:HttpClient) { }

  getMovies(){
    return this.httpClient.get(`${this.REST_API}`)
  }

  //add a brand
  addMovie(data:Movie):Observable<any>{
    let API_URL=`${this.REST_API}/add-movie`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }


  //get a single brand
  getMovie(id:any):Observable<any>{
    let API_URL =`${this.REST_API}/read-movie/${id}`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res ||{}
    }),
    catchError(this.handleError)
    )
  }

  //update brand data
  updateMovie(id:any,data:any):Observable<any>{
    let API_URL = `${this.REST_API}/update-movie/${id}`;
    return this.httpClient.put(API_URL,data,{headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  //delete book
  deleteMovie(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/delete-movie/${id}`;
    return this.httpClient.delete(API_URL,{headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  //Error
  handleError(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //Handle Client Error
      errorMessage = error.error.message;
    }else{
      //handle server error
      errorMessage= `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage)
  }
}
