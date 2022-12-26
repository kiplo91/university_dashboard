import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from './universities.service';
import { University } from './university.model';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css'],
})
export class UniversitiesComponent implements OnInit {
  universities:University[] = [];
  p:number = 1;
  searchTerm!: string;


  constructor(public service : UniversitiesService) { }

  ngOnInit(): void {
    this.service.getUniversities().subscribe((response)=>{
      this.universities= response;

    })
  }

  search(){
    if(this.searchTerm ==''){
      this.ngOnInit()
    }else{
      this.universities = this.universities.filter(res => {
        return res.alpha_two_code.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase())||
              res.country.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase())||
              res.domains.toString().match(this.searchTerm.toString())||
              res.name.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase())||
              res.province?.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase())||
              res.web_pages.toLocaleString().match(this.searchTerm.toString())
      
            })
    }
  }

  key:string='id';
  reverse:boolean=false;

  sort(key: string){
    this.key=key;
    this.reverse = !this.reverse;
  }
}

