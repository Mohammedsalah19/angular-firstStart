

import { Pipe } from '@angular/core';

@Pipe({
name:'CategoryPipe'



})

export class CategoryPipeClass{

transform(mediaItems){

for(let item in mediaItems){
cat.add(item);

}
//var cat =["a","aaa"]; 
return cat;

}

}