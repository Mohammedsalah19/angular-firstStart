
import { Component } from '@angular/core';

import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({

  selector: 'mw-media-item-form',

  templateUrl: './media-item-form.component.html',

  styleUrls: ['./formStyle.css']

})

export class MediaItemFormComponent {

  form;



  ngOnInit() {

    this.form = new FormGroup({

      medium: new FormControl('Movies'),

      name: new FormControl('',Validators.compose([
Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),

      category: new FormControl(''),

      year: new FormControl('',this.yearvalidtion),

    });

  }

//custom validation 
yearvalidtion(control){

if (control.value.trim.lengh===0){

  return null;
}
 let year = parseInt(control.value);

    let minYear = 1900;

    let maxYear = 2100;

    if(year >= minYear && year <= maxYear) {

      return null;

    } else {

      return { 'year': true };

    }

  }

  onSubmit(mediaItem) {

    console.log(mediaItem);

  }

}