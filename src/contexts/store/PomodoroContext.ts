import React, { createContext } from "react";
import { Pomodoro } from "./Pomodoro.type";
import { PomodoroAction } from "./PomodoroReducer";

export const initialState: Pomodoro = {
    workDuration: 25,
    breakDuration: 3,
    isRunning: false,
    circleComplete: 0,
    currentDuration: "Work",
};

export const PomodoroContext = createContext<{
    state: Pomodoro;
    dispatch: React.Dispatch<PomodoroAction>;
}>({ state: initialState, dispatch: () => null });

