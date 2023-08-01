import { Duration } from "../../configs/duration";

export type Pomodoro = {
    workDuration: number;
    breakDuration: number;
    isRunning: boolean;
    circleComplete: number;
    timerInterval?: number;
    currentDuration: Duration;
};

export enum TimerAction {
    START = "START",
    PAUSE = "PAUSE",
    RESTART = "RESTART",
}
