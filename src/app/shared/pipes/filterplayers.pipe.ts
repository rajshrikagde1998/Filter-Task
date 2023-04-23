import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../models/data';

@Pipe({
  name: 'filterplayers'
})
export class FilterplayersPipe implements PipeTransform {

  transform(value: Iplayers[], searchText :string): Iplayers[] {

    if(!value){
      return[]
    }
    
    if(! searchText){
      return value
    }

    let filterArr = value.filter(plaObj =>{
      return plaObj.country.toLowerCase().startsWith(searchText.toLowerCase())
    })
     return filterArr
  
  }

}
