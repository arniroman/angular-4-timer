import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1 >Welcome to {{title}}!! </h1>
        <stopwatch-component></stopwatch-component>
        <time-component></time-component>
        <timer-component></timer-component>
    `,
    styles: []
})

export class AppComponent {
    title = 'app';
}
