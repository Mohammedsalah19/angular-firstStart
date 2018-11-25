import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
 
import { MediaItemListComponent } from './mediaApp';
import { MediaItemComponent } from './item';
import { CategoryPipeClass } from './customPipe';
import { MediaItemFormComponent } from'./media-item-form.component';






@NgModule({
  imports:
  [
     BrowserModule,
      FormsModule,
      ReactiveFormsModule

  ],

  declarations:
   [ 
    
  AppComponent,
  MediaItemListComponent,
  MediaItemComponent,
  CategoryPipeClass,
  MediaItemFormComponent

 ],
 
  bootstrap:
  [
     AppComponent
  ]

})
export class AppModule { }
