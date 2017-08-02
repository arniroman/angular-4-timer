import {Injectable} from '@angular/core'
import {ClockEvents, currentTime} from "./app.time";

@Injectable()
export class StopwatchService implements ClockEvents {

    private startTime: number;
    private lastTime: number;
    private lapsHolder: LapData[];

    constructor() {
        this.reset();
    }

    getLapQty() {
        return this.lapsHolder.length
    }

    getLaps(): LapData[] {
        return this.lapsHolder
    }

    newLap() {
        let thisTime = this.startTime ?
            this.lastTime + currentTime() - this.startTime :
            this.lastTime;

        this.lapsHolder[this.lapsHolder.length - 1].setStopTime(thisTime);
        this.lapsHolder.push(new LapData(thisTime));
    }

    start(): void {
        this.startTime = this.startTime
            ? this.startTime
            : currentTime();
    }

    stop(): void {
        let thisTime = this.startTime ?
            this.lastTime + currentTime() - this.startTime :
            this.lastTime;

        this.lastTime = thisTime;
        this.lapsHolder[this.lapsHolder.length - 1].setStopTime(thisTime);
        this.startTime = 0;
    }

    reset(): void {
        this.lastTime = 0;
        this.startTime = 0;
        this.lapsHolder = [];
        this.lapsHolder.push(new LapData(1));
    }

    updateTime(): number {
        return this.lastTime +
            (this.startTime ? currentTime() - this.startTime : 0)
    }
}

export class LapData {
    private startAt: number;
    private stopTime: number;

    constructor(startAt: number) {
        this.startAt = startAt;
        this.stopTime = 0;
    }

    getStopTime() {
        return this.stopTime;
    }

    getStartTime() {
        return this.startAt;
    }

    setStopTime(stopTime: number) {
        this.stopTime = stopTime;
    }
}

