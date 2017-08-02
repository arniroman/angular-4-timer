import {Component} from '@angular/core';
import {StopwatchService} from './stopwatch.service';

@Component({
    selector: 'stopwatch-component',
    template: `
        <h1>Total Time: {{formatTime(getCurrentTime())}}</h1>
        <div *ngIf="getLapsQuantity() > 1">
            <div *ngFor=" let lap of getLaps();  let i = index; let last = last">
                <div>Lap number {{ i }}. Started at: {{ formatTime(lap.getStartTime()) }}</div>
                <div *ngIf="last">{{ formatTime(getCurrentTime()) }}</div>
                <div *ngIf="!last">{{ formatTime(lap.getStopTime()) }}</div>
            </div>
        </div>
        <button (click)="startCount()">Start</button>
        <button (click)="stopCount()">Stop</button>
        <button (click)="resetCount()">Reset</button>
        <button (click)="newLap()">New Lap</button>
    `,
    styles: []
})

export class Stopwatch {

    private isStarted: boolean;
    private currentTime: number;
    private lapTime: number;
    private stopWatch: any;
    private stopwatchService: StopwatchService;

    constructor(private stopwatch: StopwatchService) {
        this.stopwatchService = stopwatch;
        this.currentTime = 0;
        this.lapTime = 0;
        this.isStarted = false;
    }

    getCurrentTime() {
        return this.currentTime
    }

    getLapsQuantity() {
        return this.stopwatchService.getLapQty()
    }

    getLaps() {
        return this.stopwatchService.getLaps()
    }

    /**
     * Start counting time
     */
    startCount() {
        this.stopWatch = setInterval(() => {
            this.currentTime = this.stopwatchService.updateTime();
        }, 1);
        this.stopwatchService.start();
        this.isStarted = true;
    }

    /**
     * Stop counting without reset
     */
    stopCount() {
        clearInterval(this.stopWatch);
        this.stopwatchService.stop();
        this.isStarted = false;
    }

    /**
     * Start new lap and update time
     */
    newLap() {
        this.currentTime = this.stopwatchService.updateTime();
        if (this.isStarted) {
            this.stopwatchService.newLap();
        }
    }

    /**
     * Reset all statements
     */
    resetCount() {
        this.stopwatchService.reset();
        this.currentTime = this.stopwatchService.updateTime();
        this.isStarted = false;
    }

    // todo move this function
    formatTime(timeMs: number) {
        let minutes: string,
            seconds: string;

        minutes = Math.floor(timeMs / 60000).toString();
        seconds = ((timeMs % 60000) / 1000).toFixed(3);
        return minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
    }
}