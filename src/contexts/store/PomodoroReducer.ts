import { TimerAction, Pomodoro } from "./Pomodoro.type";

export interface PomodoroAction {
    type: TimerAction;
    payload: Pomodoro;
}

const PomodoroReducer = (state: Pomodoro, action: PomodoroAction) => {
    const { type, payload } = action;
    switch (type) {
        case TimerAction.START:
            return { ...state, ...payload };

        default:
            return state;
    }
};

export { PomodoroReducer };
