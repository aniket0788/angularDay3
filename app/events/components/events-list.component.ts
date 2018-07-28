import { Component, OnInit, Inject } from '@angular/core';

import { SepEvent } from "../models/sep-event";
import { SepEventsService } from "../services/sep-events.service";
import { inject } from '@angular/core/src/render3';

@Component({
    selector: 'events-list',
    templateUrl: '../views/events-list.component.html'
})

export class EventsListComponent implements OnInit {
    constructor(@Inject(SepEventsService) private _eventsService: SepEventsService) { }
    title: string = "Synechron Events List !";
    subTitle: string = "Published by Synechron HR";
    childMessage: string;
    selectedEvent: SepEvent;
    events: SepEvent[];
    ngOnInit():void{
        this.events = this._eventsService.getAllEvents();
    }
    onEventSelection(event: SepEvent): void {
        this.selectedEvent = event;
    }

    onChildConfirmation(msg: string): void {
        this.childMessage = msg;
    }

}