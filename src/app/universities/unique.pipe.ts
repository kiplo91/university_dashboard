import { Pipe, PipeTransform } from '@angular/core';
    import * as _ from 'lodash'; 

    @Pipe({
      name: 'unique',
      pure: false
    })

    export class UniquePipe implements PipeTransform {
        transform(value: any): any{
            if(value!== undefined && value!== null){
                return _.uniqBy(value, 'name') || _.uniqBy(value, 'web_pages')||_.uniqBy(value, 'province') || _.uniqBy(value, 'domains')|| _.uniqBy(value, 'country');
            }
            return value;
        }
    }