import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CinemaService {
  private host:String = "http://localhost:8080"
  constructor(private http:HttpClient) { }
  
  
  public getvilles(){
    return this.http.get(this.host+"/villes");
  }

  getCinemas(v:any){
    return this.http.get(v._links.cinemas.href);
  }
  
  getSalles(c: any){
    return this.http.get(c._links.salles.href);
  }
}
