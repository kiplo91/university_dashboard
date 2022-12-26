import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversitiesRoutingModule } from './universities-routing.module';
import { UniversitiesComponent } from './universities.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipe } from 'ng2-search-filter/src/ng2-filter.pipe';
import { UniquePipe } from './unique.pipe';


@NgModule({
  declarations: [
    UniversitiesComponent,
    UniquePipe
  ],
  imports: [
    CommonModule,
    UniversitiesRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ]
})
export class UniversitiesModule { }
