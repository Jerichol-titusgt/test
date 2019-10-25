import { PipeTransform, Pipe } from '@angular/core';
import * as _isEmpty from 'lodash';

@Pipe({
    name: 'startcase'
})
export class startcase implements PipeTransform{

    transform(value:any){
            
        return _isEmpty.startCase(value);
    }

}