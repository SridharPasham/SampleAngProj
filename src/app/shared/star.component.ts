import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core'

@Component({
    selector:"app-star",
    templateUrl:"./star.component.html"    
})
export class StarComponent implements OnChanges{
@Input() rating:number;
starWidth:number;
@Output() notify: EventEmitter<string>=
new EventEmitter<string>();

ngOnChanges():void{
this.starWidth=this.rating*86/5;
}
onClick(){
    this.notify.emit(` Rating ${this.rating} is clicked`);
}
}