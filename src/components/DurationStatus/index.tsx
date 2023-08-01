import { FC } from "react";
import { Duration } from "../../configs/duration";
import { Heading } from "@chakra-ui/react";

interface DurationStatusProps {
    duration: Duration;
}

const DurationStatus: FC<DurationStatusProps> = ({ duration }) => {
    return (
        <Heading as={"h3"} textAlign={"center"} fontWeight={"medium"}>
            {duration}
        </Heading>
    );
};

export default DurationStatus;

