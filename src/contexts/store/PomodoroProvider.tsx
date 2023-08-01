import { FC, ReactNode, useReducer } from "react";
import { PomodoroContext } from "./PomodoroContext";
import { PomodoroReducer } from "./PomodoroReducer";
import { initialState } from "./PomodoroContext";

interface PomodoroProviderProps {
    children: ReactNode;
}

const PomorodoProvider: FC<PomodoroProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(PomodoroReducer, initialState);
    return (
        <PomodoroContext.Provider value={{ state, dispatch }}>
            {children}
        </PomodoroContext.Provider>
    );
};

export default PomorodoProvider;
