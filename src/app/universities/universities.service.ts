import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { University } from './university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  constructor(private http:HttpClient) { }

  url:string = "http://universities.hipolabs.com/search?country=United+States";

  getUniversities(){
    return this.http.get<University[]>(this.url)
  }
}
