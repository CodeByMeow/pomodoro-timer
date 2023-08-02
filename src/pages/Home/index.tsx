import { VStack } from "@chakra-ui/react";
import Circular from "../../components/Circular";
import { useState } from "react";
import { PlayButton } from "../../components/Button";
import DurationStatus from "../../components/DurationStatus";
import RemainingTime from "../../components/RemainingTime";

const Home = () => {
    const [valueEnd, setValueEnd] = useState(100);
    return (
        <VStack justify={"center"} spacing={20}>
            <Circular value={valueEnd} duration={"Work"}>
                <RemainingTime time={19} />
            </Circular>
            <DurationStatus duration={"Work"} />
            <PlayButton
                handlePlayTimer={() => {
                    setValueEnd(25);
                }}
            />
        </VStack>
    );
};

export default Home;
