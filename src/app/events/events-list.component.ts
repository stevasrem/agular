import {Component} from '@angular/core'

@Component({
    selector:'events-list',
    template:`
    <div>
        <h1>Upcoming Angular Events </h1>
        <hr>
        
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: {{event.price}} $</div>
            <div>
                <span>Location: {{event.location.adress}}</span>
                <span>&nbsp;</span>
                <span>{{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
    </div>`
})
export class EventsListComponent{
    //predstavimo event objekt
    event = {
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