import { Component , EventEmitter, Input, Output} from '@angular/core';



@Component({
    selector:'event-thumbnail',
    template:`
     <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}} </div>
        <div>
            <span>Location: {{event.location.adress}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <button type="button" class="btn btn-primary" (click)="handleClickMe()">Click</button>
    `
})
export class EventThumbnailComponent{
    @Input() event:any;
    // napravio sam Output objekat koji je event emiter i taj objekat koristi funkcija handleClickMe da emituje foo, kada se klikne na dugme - ovo je 
    // uobicajan patern koji se koristi pri registrovanju eventova na stranici
    
    @Output() eventClick = new EventEmitter();

    handleClickMe(){ 
        this.eventClick.emit('foo');
    }
}