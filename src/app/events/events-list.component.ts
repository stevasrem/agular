import {Component} from '@angular/core'

@Component({
    selector:'events-list',
    templateUrl: "./events-list.component.html"
    
})
export class EventsListComponent{
    //predstavimo event objekt
    event1 = {
        id:1,
        name:'Angular Connect',
        date:'9/26/2022',
        time:'10:00 am',
        price:599.99,
        imageUrl:'/assets/images/angularconnect-shield.png',
        location:{
            adress:'105t DT',
            city:'London',
            country:'England'
        }
    }
}