import { Box, useToken } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CurcularProvider from "../CurcularProvider";
import { Duration } from "../../configs/duration";

interface CircularProps {
    value: number;
    duration: Duration;
    children: ReactNode;
}

const Circular: FC<CircularProps> = ({ value, duration, children }) => {
    const [workColor, breakColor, bgColor] = useToken("colors", [
        "pomodoro.s5",
        "pomodoro.s6",
        "pomodoro.s2",
    ]);

    return (
        <Box p={10} bgColor={"pomodoro.s3"} rounded={"full"} shadow={"base"}>
            <Box maxW={"sm"} rounded={"inherit"} shadow={"lg"}>
                <CurcularProvider valueStart={100} valueEnd={value}>
                    {(value) => (
                        <CircularProgressbarWithChildren
                            value={value}
                            strokeWidth={5}
                            styles={buildStyles({
                                pathColor:
                                    duration === "Work"
                                        ? workColor
                                        : breakColor,
                                trailColor: bgColor,
                            })}
                        >
                            {children}
                        </CircularProgressbarWithChildren>
                    )}
                </CurcularProvider>
            </Box>
        </Box>
    );
};

export default Circular;
