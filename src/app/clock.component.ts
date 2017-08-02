import {Component} from '@angular/core';

@Component({
    selector: 'time-component',
    template: `
        <h1>Time: {{time}}</h1>    `,
    styles: []
})
export class Clock {
    time: string;

    constructor() {
        this.updateTime();
    }

    private updateTime() {
        let instance = this;
        setInterval(() => {
            let date = new Date();
            instance.time = date.getHours() + ":"
                + date.getMinutes() + ":"
                + date.getSeconds()
        }, 1000);
    }
}