import { VStack } from "@chakra-ui/react";
import Circular from "../../components/Circular";
import { useContext, useState } from "react";
import { PlayButton } from "../../components/Button";
import DurationStatus from "../../components/DurationStatus";
import RemainingTime from "../../components/RemainingTime";
import { PomodoroContext } from "../../contexts/store/PomodoroContext";
import { TimerAction } from "../../contexts/store/Pomodoro.type";

const Home = () => {
    const [valueEnd, setValueEnd] = useState(100);
    const { state, dispatch } = useContext(PomodoroContext);
    return (
        <VStack justify={"center"} spacing={20}>
            <Circular value={valueEnd} duration={state.currentDuration}>
                <RemainingTime time={19} />
            </Circular>
            <DurationStatus duration={state.currentDuration} />
            <PlayButton
                handlePlayTimer={() => {
                    dispatch({
                        type: TimerAction.START,
                        payload: { ...state, currentDuration: "Break" },
                    });
                    setValueEnd(25);
                }}
            />
        </VStack>
    );
};

export default Home;
