import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StopwatchService} from "./stopwatch.service";
import {Stopwatch} from "./stopwatch.component";
import {Clock} from "./clock.component";
import {Timer} from "./timer.component";
import {TimerService} from "./timer.service";


@NgModule({
    declarations: [
        AppComponent,
        Stopwatch,
        Clock,
        Timer
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [StopwatchService, TimerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
