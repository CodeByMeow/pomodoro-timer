import { VStack } from "@chakra-ui/react";
import Circular from "../../components/Circular";
import { useState } from "react";
import { PlayButton } from "../../components/Button";

const Home = () => {
    const [valueEnd, setValueEnd] = useState(100);
    return (
        <VStack justify={"center"} spacing={20}>
            <Circular
                value={valueEnd}
                duration={"Work"}
            >{`${valueEnd}%`}</Circular>
            <PlayButton handlePlayTimer={() => setValueEnd(50)} />
        </VStack>
    );
};

export default Home;
