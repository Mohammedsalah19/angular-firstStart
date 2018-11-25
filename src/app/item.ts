import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({

  selector: 'mw-media-item',

  templateUrl: './item.html',

  styleUrls: ['./style.css']

})

export class MediaItemComponent {

  @Input() mediaItem;

  @Output() delete = new EventEmitter();



  onDelete() {

    this.delete.emit(this.mediaItem);

  }

}